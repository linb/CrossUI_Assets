<?php
include_once("config.php");

class orders extends Unit
{
    public function stimulate(&$hash){
        $db = new MYSQL;
        $db->connect(DB_HOST, DB_USER, DB_PASS, DB_DBNAME);
        //$db->query("SET NAMES 'UTF8'");

        //must have a string parameter 'action'
        LINB::checkArgs($hash, array(
            'string' => array(
                'action' => NULL
            )
        ));

        $protectArray=array(1,2,3,4,5,6,7,8,9,10);
        // return data
        $cols=array("OrderID","CustomerID","CompanyName","EmployeeID", "EmployeeName",
            "OrderDate","PurchaseOrderNumber","ShipDate",
            "ShippingMethodID", "ShippingMethod", "PaymentMethodID", "PaymentMethod",
            "FreightCharge","Taxes","PaymentReceived","Comment");

        $countSQL="SELECT COUNT(OrderID) FROM tbl_orders";
        $selSQL="SELECT o.`OrderID`,o.`CustomerID`,c.`CompanyName`,o.`EmployeeID`, CONCAT(e.`LastName`, ' ', e.`FirstName`) as EmployeeName, ".
            "o.`OrderDate`,o.`PurchaseOrderNumber`,o.`ShipDate`, ".
            "o.`ShippingMethodID`, s.`ShippingMethod`, o.`PaymentMethodID`, p.`PaymentMethod`, ".
            "o.`FreightCharge`,o.`Taxes`,o.`PaymentReceived`,o.`Comment` ".
            "FROM `tbl_orders` as o ".
            "LEFT JOIN `tbl_customers` as c on o.`CustomerID`=c.`CustomerID` ".
            "LEFT JOIN `tbl_employees` as e on o.`EmployeeID`=e.`EmployeeID` ".
            "LEFT JOIN `tbl_shippingmethods` as s on o.`ShippingMethodID`=s.`ShippingMethodID` ".
            "LEFT JOIN `tbl_paymentmethods` as p on o.`PaymentMethodID`=p.`PaymentMethodID` ";

        $colsDetail = array("OrderID","UnitPrice","ProductID", "Quantity", "Discount");

        $OrderDetailSQL= "SELECT o.`ProductID`, p.`ProductName`, o.`Quantity`,o.`UnitPrice`,o.`Discount` FROM tbl_orderdetails as o ".
            "LEFT JOIN `tbl_products` as p on p.`ProductID`=o.`ProductID` ";

        //handle the process
        switch($hash->action) {
            case 'get':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'OrderID' => NULL
                    )
                ));
                $selSQL=$selSQL." WHERE `OrderID`=".$hash->OrderID;
                $rows =  $db->query($selSQL);

                $OrderDetailSQL= $OrderDetailSQL." WHERE `OrderID`='".$hash->OrderID."'";
                return array(
                    "fields" => array_combine($cols, $rows[0]),
                    "details"=> $db->query($OrderDetailSQL)
                );
            case 'create':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'object' => array(
                        'fields' => NULL
                    ),
                    'array' => array(
                        'details' => NULL
                    )
                ));
                $newId=$db->insert("tbl_orders", (array)($hash->fields));

                // insert detail
                $arr2=(array)($hash->details);
                if(count($arr2)>0){
                    foreach($arr2 as &$row){
                        $row1 = array_filter((array)$row, function($key) use ($colsDetail) {
                                return in_array ($key, $colsDetail);
                        }, ARRAY_FILTER_USE_KEY);
                        $row1["OrderID"]=$newId;
                        $db->insert("tbl_orderdetails",  $row1);
                    }
                    unset($row);
                }
                $selSQL = $selSQL." WHERE  OrderID=".$newId;
                $rows = $db->query($selSQL);

                return array(
                    "fields" => array_combine($cols, $rows[0]),
                    "details"=> $db->query($selSQL)
                );
            case 'set':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'OrderID' => NULL
                    )
                ));
                $action=false;
                if(isset($hash->fields) && count((array)$hash->fields)>0) {
                    $action=true;
                    $db->update("tbl_orders", (array)$hash->fields, "`OrderID`='".$hash->OrderID."'");
                }

                if(isset($hash->details)){
                    $action=true;
                    $arr2=(array)($hash->details);
                     if(count($arr2)>0){
                        // delete details first
                        $db->delete("tbl_orderdetails", "`OrderID`='".$hash->OrderID."'");
                        // insert detail
                        foreach($arr2 as &$row){
                            $row1 = array_filter((array)$row, function($key) use ($colsDetail) {
                                    return in_array ($key, $colsDetail);
                            }, ARRAY_FILTER_USE_KEY);

                            $row1["OrderID"]=$hash->OrderID;
                            $db->insert("tbl_orderdetails",  $row1);
                        }
                        unset($row);
                    }
                }
                return $action?1:0;
            case 'list':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'integer' => array(
                        'page' => NULL,
                        'size' => NULL
                    )
                ));

                $limit = $db->query("SELECT OrderID from tbl_orders ORDER BY OrderID DESC LIMIT ".(($hash->page-1)*$hash->size).", ".$hash->size);
                $add="";

                if(count($limit)){
                    foreach($limit as &$row){
                        if(strlen($add)>0){
                            $add = $add.",";
                        }
                        $row1=(array)$row;
                        $add = $add.$row1[0];
                    }
                }
                $selSQL = $selSQL." WHERE `OrderID` in (".$add.") ".
                          "ORDER BY `OrderID` DESC";

                return array(
                 "totalCount"=>$db->query($countSQL)[0][0],
                 "columns" => $cols,
                 "rows" => $db->query($selSQL)
                 );
            case 'delete':
                LINB::checkArgs($hash, array(
                    'array' => array(
                        'ids' => NULL
                    )
                 ));
                $hasprotected=array_intersect($hash->ids, $protectArray);
                if(count($hasprotected)>0){
                    throw new LINB_E("You can't delete the top 10 records! :)");
                }else{
                    $instr = implode(",", $hash->ids);
                    return $db->delete("tbl_orders", "`OrderID` in(".$instr.")");
                }

            default:
                throw new LINB_E("No function for action '".$hash->action."'!");
        }

    }
}
?>

<?php
include_once("config.php");

class customers extends Unit
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
        $cols=array("CustomerID","CompanyName","FirstName","LastName","BillingAddress","City","StateOrProvince","ZIPCode",
        "Email","CompanyWebsite","PhoneNumber","FaxNumber","ShipAddress","ShipCity","ShipStateOrProvince",
        "ShipZIPCode","ShipPhoneNumber","Notes" );

        $cols2=array("CustomerID","CompanyName","FirstName","LastName","BillingAddress","City","StateOrProvince","ZIPCode",
        "Email","CompanyWebsite","PhoneNumber","FaxNumber" );

        $countSQL="SELECT COUNT(CustomerID) FROM tbl_customers";
        $selSQL="SELECT  `CustomerID`, `CompanyName`, `FirstName`, `LastName`, `BillingAddress`, `City`, `StateOrProvince`, `ZIPCode`, `Email`, ".
            "`CompanyWebsite`, `PhoneNumber`, `FaxNumber`, `ShipAddress`, `ShipCity`, `ShipStateOrProvince`, ".
            "`ShipZIPCode`, `ShipPhoneNumber`, `Notes` ".
            "FROM `tbl_customers` ";
        $selSQL2="SELECT  `CustomerID`, `CompanyName`, `FirstName`, `LastName`, `BillingAddress`, `City`, `StateOrProvince`, `ZIPCode`, `Email`, ".
            "`CompanyWebsite`, `PhoneNumber`, `FaxNumber` ".
            "FROM `tbl_customers` ";

        //handle the process
        switch($hash->action) {
            case 'get':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'CustomerID' => NULL
                    )
                ));
                $selSQL=$selSQL." WHERE `CustomerID`=".$hash->CustomerID;
                $rows =  $db->query($selSQL);

                return array_combine($cols, $rows[0]);
            case 'create':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'object' => array(
                        'fields' => NULL
                    )
                ));
                $newId=$db->insert("tbl_customers", (array)($hash->fields));

                $selSQL = $selSQL." WHERE  `CustomerID`=".$newId;
                $rows =  $db->query($selSQL);

                return array_combine($cols, $rows[0]);
            case 'set':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'CustomerID' => NULL
                    ),
                    'object' => array(
                        'fields' => NULL
                    )
                ));
                return $db->update("tbl_customers", (array)$hash->fields, "`CustomerID`='".$hash->CustomerID."'");
            case 'list':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'integer' => array(
                        'page' => NULL,
                        'size' => NULL
                    )
                ));
                $limit = $db->query("SELECT CustomerID from tbl_customers ORDER BY CustomerID DESC LIMIT ".(($hash->page-1)*$hash->size).", ".$hash->size);
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
                $selSQL = $selSQL." WHERE `CustomerID` in (".$add.") ".
                          "ORDER BY CustomerID DESC";

                return array(
                 "totalCount"=>$db->query($countSQL)[0][0],
                 "columns" => $cols,
                 "rows" => $db->query($selSQL)
                 );

            case 'delete':
                //must have parameters
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
                    return $db->delete("tbl_customers", "`CustomerID` in(".$instr.")");
                }

            default:
                throw new LINB_E("No function for action '".$hash->action."'!");
        }

    }
}
?>

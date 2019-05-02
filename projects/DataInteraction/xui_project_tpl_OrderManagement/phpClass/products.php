<?php
include_once("config.php");

class products extends Unit
{
    public function stimulate(&$hash){
        $db = new MYSQL;
        $db->connect(DB_HOST, DB_USER, DB_PASS, DB_DBNAME);
        $db->query("SET NAMES 'UTF8'");

        //must have a string parameter 'action'
        LINB::checkArgs($hash, array(
            'string' => array(
                'action' => NULL
            )
        ));

        $protectArray=array(1,2,3,4,5,6,7,8,9,10);
        // return data
        $cols=array("ProductID","ProductName","UnitPrice","InStock");
        $cols2=array("ProductID","ProductName","UnitPrice","InStock");

        $countSQL="SELECT COUNT(ProductID) FROM tbl_products";
        $selSQL="SELECT `ProductID`, `ProductName`, `UnitPrice`, `InStock` ".
            "FROM `tbl_products` ";
        $selSQL2="SELECT `ProductID`, `ProductName`, `UnitPrice`, `InStock` ".
            "FROM `tbl_products` ";

        //handle the process
        switch($hash->action) {
            case 'get':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'ProductID' => NULL
                    )
                ));
                $selSQL=$selSQL." WHERE `ProductID`=".$hash->ProductID;
                $rows =  $db->query($selSQL);

                return array_combine($cols, $rows[0]);
            case 'create':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'object' => array(
                        'fields' => NULL
                    )
                ));
                $newId=$db->insert("tbl_products", (array)($hash->fields));

                $selSQL = $selSQL." WHERE  `ProductID`=".$newId;
                $rows =  $db->query($selSQL);

                return array_combine($cols, $rows[0]);
            case 'set':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'ProductID' => NULL
                    ),
                    'object' => array(
                        'fields' => NULL
                    )
                ));
                return $db->update("tbl_products", (array)$hash->fields, "`ProductID`='".$hash->ProductID."'");

            case 'list':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'integer' => array(
                        'page' => NULL,
                        'size' => NULL
                    )
                ));
                $limit = $db->query("SELECT ProductID from tbl_products ORDER BY ProductID DESC LIMIT ".(($hash->page-1)*$hash->size).", ".$hash->size);
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
                $selSQL = $selSQL." WHERE `ProductID` in (".$add.") ".
                          "ORDER BY ProductID DESC";

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
                    return $db->delete("tbl_products", "`ProductID` in(".$instr.")");
                }

            default:
                throw new LINB_E("No function for action '".$hash->action."'!");
        }
    }
}
?>

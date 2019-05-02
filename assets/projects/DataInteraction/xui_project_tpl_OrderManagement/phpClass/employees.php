<?php
include_once("config.php");

class employees extends Unit
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
        $cols=array("EmployeeID","FirstName","LastName","Title", "WorkPhone");
        $cols2=array("EmployeeID","EmployeeName","Title", "WorkPhone");

        $countSQL="SELECT COUNT(EmployeeID) FROM tbl_employees";
        $selSQL="SELECT `EmployeeID`, `FirstName`, `LastName`, `Title`, ".
            "`WorkPhone` ".
            "FROM `tbl_employees` ";
        $selSQL2="SELECT `EmployeeID`,CONCAT(`LastName`, ' ', `FirstName`) as EmployeeName,`Title`, ".
            "`WorkPhone` ".
            "FROM `tbl_employees` ";

        //handle the process
        switch($hash->action) {
            case 'get':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'EmployeeID' => NULL
                    )
                ));
                $selSQL=$selSQL." WHERE `EmployeeID`=".$hash->EmployeeID;
                $rows =  $db->query($selSQL);

                return array_combine($cols, $rows[0]);
            case 'create':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'object' => array(
                        'fields' => NULL
                    )
                ));
                $newId=$db->insert("tbl_employees", (array)($hash->fields));

                $selSQL = $selSQL." WHERE  `EmployeeID`=".$newId;
                $rows =  $db->query($selSQL);

                return array_combine($cols, $rows[0]);
            case 'set':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'EmployeeID' => NULL
                    ),
                    'object' => array(
                        'fields' => NULL
                    )
                ));
                return $db->update("tbl_employees", (array)$hash->fields, "`EmployeeID`='".$hash->EmployeeID."'");
            case 'list':
                //must have parameters
                LINB::checkArgs($hash, array(
                    'integer' => array(
                        'page' => NULL,
                        'size' => NULL
                    )
                ));
                $limit = $db->query("SELECT EmployeeID from tbl_employees ORDER BY EmployeeID DESC LIMIT ".(($hash->page-1)*$hash->size).", ".$hash->size);
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
                $selSQL = $selSQL." WHERE `EmployeeID` in (".$add.") ".
                          "ORDER BY EmployeeID DESC";

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
                    return $db->delete("tbl_employees", "`EmployeeID` in(".$instr.")");
                }


            default:
                throw new LINB_E("No function for action '".$hash->action."'!");
        }

    }
}
?>

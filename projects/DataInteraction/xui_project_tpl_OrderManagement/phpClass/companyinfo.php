<?php
include_once("config.php");

class companyinfo extends Unit
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

        //handle the process
        switch($hash->action) {
            case 'get':
                //must have string parameters 'SetupID'
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'SetupID' => NULL
                    )
                ));
                $rows = $db->query("select `SetupID`,`CompanyName`,`City`,`Address`,`StateOrProvince`,`ZIPCode`,`PhoneNumber`,`FaxNumber` from `tbl_companyinfo` where `SetupID` = '".$hash->SetupID."'");

                $cap = array("SetupID","CompanyName","City","Address","StateOrProvince","ZIPCode","PhoneNumber","FaxNumber");
                return array_combine($cap, $rows[0]);
            case 'set':
                //must have string parameters 'SetupID'
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'SetupID' => NULL
                    ),
                    'object' => array(
                        'fields' => NULL
                    ),
                ));
                return $db->update("tbl_companyinfo", (array)$hash->fields, "`SetupID`='".$hash->SetupID."'");
            default:
                throw new LINB_E("No function for action '".$hash->action."'!");
        }

    }
}
?>

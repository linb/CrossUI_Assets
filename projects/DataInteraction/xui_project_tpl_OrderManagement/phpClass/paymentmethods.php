<?php
include_once("config.php");

class paymentmethods extends Unit
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

        //handle the process
        switch($hash->action) {
            case 'getList':
            case 'getlistforsel':
                return $db->query("select `PaymentMethodID`, `PaymentMethod` from `tbl_paymentmethods` order by `PaymentMethodID`");
            case 'delete':
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'id' => NULL
                    )
                ));

                if (!is_null($db->select("`tbl_orders`", "`OrderID`", "`PaymentMethodID`=".$hash->id))){
                    throw new LINB_E("Cann't delete a row which is in use!");
                }else{
                    return $db->delete("tbl_paymentmethods", "`PaymentMethodID`=".$hash->id);
                }
            case 'update':
                LINB::checkArgs($hash, array(
                    'string' => array(
                        'id' => NULL
                    ),
                    'array' => array(
                        'fields' => NULL
                    )
                ));
                return $db->update("tbl_paymentmethods", $hash->fields, "`PaymentMethodID`=".$hash->id);
            case 'create':
                LINB::checkArgs($hash, array(
                    'array' => array(
                        'fields' => NULL
                    )
                ));
                return $db->insert("tbl_paymentmethods", $hash->fields);
            default:
                throw new LINB_E("No function for action '".$hash->action."'!");
        }

    }
}
?>

This real case is adapted from one of our customers.

1. Unzip and copy the folder into your web dir, rename it to "OrderManagement" ( or any valid web directory names ).

2. If you don't have CrossUI runtime package, you can download it at http://www.crossui.com/download.html. Unzip and copy runtime fold into "OrderManagement".

3. If you already have CrossUI runtime pakage in your web dir, open index.html, make sure all these runtime file paths are correct.

   runtime/loading.gif
   runtime/xui/js/xui-all.js

4. Setup mysql:

   Create a db named 'xui_ordermanagement' in your mysql;
   Import xui_ordermanagement.sql to the db;
   Configure mysql info in phpClass\config.php;
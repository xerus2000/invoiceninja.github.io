(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{359:function(t,a,e){"use strict";e.r(a);var n=e(43),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#server-requirements"}},[t._v("Server Requirements")])]),e("li",[e("a",{attrs:{href:"#installing-invoice-ninja"}},[t._v("Installing Invoice Ninja")]),e("ul",[e("li",[e("a",{attrs:{href:"#method-1-download-pre-built-zip"}},[t._v("Method 1: Download pre built zip.")])]),e("li",[e("a",{attrs:{href:"#method-2-installation-from-git"}},[t._v("Method 2: Installation from git")])])])]),e("li",[e("a",{attrs:{href:"#installing-invoice-ninja-docker"}},[t._v("Installing Invoice Ninja (Docker)")])]),e("li",[e("a",{attrs:{href:"#trouble-shooting"}},[t._v("Trouble shooting")]),e("ul",[e("li",[e("a",{attrs:{href:"#erroneous-data-format-for-unserializing-symfony-component-routing-compiledroute"}},[t._v("Erroneous data format for unserializing 'Symfony\\Component\\Routing\\CompiledRoute'")])]),e("li",[e("a",{attrs:{href:"#unable-to-connect-to-database-after-installation"}},[t._v("Unable to connect to database after installation")])]),e("li",[e("a",{attrs:{href:"#nginx-413-request-entity-too-large"}},[t._v("Nginx: 413 – Request Entity Too Large")])])])])])]),e("p"),t._v(" "),e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("h2",{attrs:{id:"server-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-requirements"}},[t._v("#")]),t._v(" Server Requirements")]),t._v(" "),e("p",[t._v("Invoice Ninja has a few system requirements. Built on top of "),e("a",{attrs:{href:"www.laravel.com/docs/"}},[t._v("Laravel")]),t._v(" it requires a PHP and MySQL server at a minimum with the following version and extensions installed.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("You need to setup this version completely from scratch. Do not attempt to overwrite your old version of Invoice Ninja (4.x.x) with this version as the two codebases are completely different.")])]),t._v(" "),e("ul",[e("li",[t._v("PHP >= 7.3.x")]),t._v(" "),e("li",[t._v("bcmath extension")]),t._v(" "),e("li",[t._v("ctype extension")]),t._v(" "),e("li",[t._v("fileinfo extension")]),t._v(" "),e("li",[t._v("json extension")]),t._v(" "),e("li",[t._v("mbstring extension")]),t._v(" "),e("li",[t._v("openssl extension")]),t._v(" "),e("li",[t._v("PDO extension")]),t._v(" "),e("li",[t._v("tokenizer extension")]),t._v(" "),e("li",[t._v("xml extension")]),t._v(" "),e("li",[t._v("curl extension")]),t._v(" "),e("li",[t._v("zip extension")]),t._v(" "),e("li",[t._v("gmp extension")]),t._v(" "),e("li",[t._v("mysqli extension")]),t._v(" "),e("li",[t._v("MySQL / MariaDB Server")])]),t._v(" "),e("h2",{attrs:{id:"installing-invoice-ninja"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-invoice-ninja"}},[t._v("#")]),t._v(" Installing Invoice Ninja")]),t._v(" "),e("h3",{attrs:{id:"method-1-download-pre-built-zip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-1-download-pre-built-zip"}},[t._v("#")]),t._v(" Method 1: Download pre built zip.")]),t._v(" "),e("p",[t._v("A prebuilt zip can be downloaded from our GitHub release page "),e("a",{attrs:{href:"https://github.com/invoiceninja/invoiceninja/releases"}},[t._v("here")]),t._v(". You will  need to download the package which is appended with "),e("b",[t._v("-release")]),t._v(", download the file named invoiceninja.zip.")]),t._v(" "),e("p",[t._v("Unzip this file into the virtual host directory you have created.")]),e("p"),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Ensure the file permission have been set to the web server user. For example in Ubuntu this is www-data if you have configured a virtual host with a root directory of "),e("code",[t._v("/var/www/html")]),t._v(" you would set the ownership like this.")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R www-data:www-data /var/www/html\n")])])]),e("h5",{attrs:{id:"web-server-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-server-configuration"}},[t._v("#")]),t._v(" Web server configuration")]),t._v(" "),e("p",[t._v("A sample NGINX configuration is provided below, it assumes you have PHP 7.4 installed with the PHP FPM extension installed")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\nlisten "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver_name invoiceninja.test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nroot /var/www/invoiceninja/public"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nindex index.php index.html index.htm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclient_max_body_size 20M"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlocation / "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    try_files "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-e "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rewrite ^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".+"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ /index.php?q"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" last"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nlocation ~ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".php$ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\ninclude snippets/fastcgi-php.conf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfastcgi_pass unix:/run/php/php7.4-fpm.sock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nlocation ~ /"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".ht "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    deny all"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h5",{attrs:{id:"database-server-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-server-configuration"}},[t._v("#")]),t._v(" Database server configuration")]),t._v(" "),e("p",[t._v("Create a database on your MySQL compatible server and add a user that has full access to the database, database configuration is out of the scope of this article, more information can be found "),e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/creating-database.html"}},[t._v("here")])]),t._v(" "),e("h5",{attrs:{id:"headless-chrome"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headless-chrome"}},[t._v("#")]),t._v(" Headless Chrome")]),t._v(" "),e("p",[t._v("Invoice Ninja currently relies on Headless Chrome to generate PDFs, you will need to install this by running the follow command from the project directory")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("h5",{attrs:{id:"cron-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cron-configuration"}},[t._v("#")]),t._v(" Cron configuration")]),t._v(" "),e("p",[t._v("Invoice Ninja relies heavily on the Laravel Scheduler, for this to operate it requires that a cron job to be configured, edit your crontab and enter the following record")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("* * * * * "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path-to-your-project "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" php artisan schedule:run "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v("\n")])])]),e("p",[t._v("Navigate your browser to your installation domain name address with /setup appended ie, "),e("b",[t._v("www.invoiceninja.test/setup")]),t._v(" from this page you will configure your database, mailserver and the primary account user, when completed, click Submit and the app will setup your application and redirect you to the login page")]),t._v(" "),e("h3",{attrs:{id:"method-2-installation-from-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-2-installation-from-git"}},[t._v("#")]),t._v(" Method 2: Installation from git")]),t._v(" "),e("p",[t._v("For power users installing the app from Github can be done with the following steps")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/invoiceninja/invoiceninja.git\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout v2\n\ncomposer update\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" .env.example .env\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n\nphp artisan optimize\n")])])]),e("h5",{attrs:{id:"cron-configuration-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cron-configuration-2"}},[t._v("#")]),t._v(" Cron configuration")]),t._v(" "),e("p",[t._v("Invoice Ninja relies heavily on the Laravel Scheduler, for this to operate it requires that a cron job to be configured, edit your crontab and enter the following record")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("* * * * * "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path-to-your-project "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" php artisan schedule:run "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v("\n")])])]),e("p",[t._v("Configure your virtual host, create a database and point your browser to http://your.domain.com/setup and follow the bouncing ball!")]),t._v(" "),e("h2",{attrs:{id:"installing-invoice-ninja-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-invoice-ninja-docker"}},[t._v("#")]),t._v(" Installing Invoice Ninja (Docker)")]),t._v(" "),e("p",[t._v("If you prefer to use Docker, we have a dedicated repository with detailed instructions on how to get started "),e("a",{attrs:{href:"https://github.com/invoiceninja/dockerfiles"}},[t._v("HERE")])]),t._v(" "),e("h2",{attrs:{id:"trouble-shooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trouble-shooting"}},[t._v("#")]),t._v(" Trouble shooting")]),t._v(" "),e("h3",{attrs:{id:"erroneous-data-format-for-unserializing-symfony-component-routing-compiledroute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#erroneous-data-format-for-unserializing-symfony-component-routing-compiledroute"}},[t._v("#")]),t._v(" Erroneous data format for unserializing 'Symfony\\Component\\Routing\\CompiledRoute'")]),t._v(" "),e("p",[t._v("The most common cause of this issue is running multiple version of PHP, if the caches are built with a different version of PHP you may see the above error as differing versions of PHP may not be interoperable on the same installation. Ensure you are running the same CLI and Web PHP version to prevent any errors")]),t._v(" "),e("h3",{attrs:{id:"unable-to-connect-to-database-after-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-connect-to-database-after-installation"}},[t._v("#")]),t._v(" Unable to connect to database after installation")]),t._v(" "),e("p",[t._v("You may need to restart the queue like this")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php artisan queue:restart\n")])])]),e("h3",{attrs:{id:"nginx-413-request-entity-too-large"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-413-request-entity-too-large"}},[t._v("#")]),t._v(" Nginx: 413 – Request Entity Too Large")]),t._v(" "),e("p",[t._v("This error indicated that the client_max_body_size parameter in NGINX is too small, you will need to edit your nginx config and increase the size")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("client_max_body_size 100M"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);
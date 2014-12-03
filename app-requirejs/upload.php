<?php
if (is_uploaded_file($_FILES['file']['tmp_name'])) {
		var_dump($_FILES['file']);
		exit;
    } else {
       exit('error');
    }
}
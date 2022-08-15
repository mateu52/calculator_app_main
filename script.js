object.onclick = function showcommentform() {  
    var data="Name:<br><input type='text' name='name'><br>Comment:<br><textarea rows='5' cols='50'></textarea><br><input type='submit' value='comment'>";  
      
    document.getElementById('mylocation').innerHTML=data;  
     }  
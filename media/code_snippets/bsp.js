var gIntervalId = window.setInterval ( "checkPos();", 5000 );

function success(position) 
{
	var s = document.querySelector('#status');
  
	if (s.className == 'success')
	{
    	// Kommentar    
    	return;
    }
}
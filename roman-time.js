var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии
var hoursNew, minutesNew, ost;

if (hours<24 && minutes<60 && hours>=0 && minutes>=0)
    {ost = hours % 10;
    if (hours==0) {hoursNew = '0'}
       else{
   switch ((hours - ost)/10)
   {
    case 1:
       hoursNew ='X';
        break;
    case 2:
       hoursNew ='XX';
        break;}

   switch (ost) {
    case 1:
       hoursNew +='I';
        break;
    case 2:
       hoursNew +='II';
       
        break;
    case 3:
       hoursNew += 'III';
        break;
    case 4:
       hoursNew += 'IV';
        break;
    case 5:
       hoursNew += 'V';
        break;
    case 6:
       hoursNew += 'VI';
        break;
     case 7:
       hoursNew += 'VII';
        break; 
    case 8:
       hoursNew += 'VIII';
        break;
    case 9:
       hoursNew += 'IX';
        break;
    } }
if (minutes==0) {minutesNew = '0'}
     else {	 
     ost = minutes % 10;
    switch ((minutes - ost)/10)
   { 
    case 1:
       minutesNew = 'X';
        break;
    case 2:
       minutesNew = 'XX';
        break;
	case 3:
       minutesNew = 'XXX';
	case 4:
       minutesNew = 'XL';
        break;
	case 5:
       minutesNew = 'L';
        break;
        }



    switch (ost) {
  
    case 1:
       minutesNew += 'I';minutesNew
        break;
    case 2:
       minutesNew += 'II';
       
        break;
    case 3:
       minutesNew += 'III';
        break;
    case 4:
       minutesNew += 'IV';
        break;
    case 5:
       minutesNew += 'V';
        break;
    case 6:
       minutesNew += 'VI';
        break;
     case 7:
       minutesNew += 'VII';
        break; 
    case 8:
       minutesNew += 'VIII';
        break;
    case 9:
       minutesNew += 'IX';
        break;
    } 
}
    console.log(hoursNew,':',minutesNew);}
	else {console.log('error: not set correctly the time');}
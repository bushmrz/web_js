/* ----------------------- Задание 1 --------------------------- */
function time() {
    var time=new Date();
    var thismonth=time.getMonth()+1;
    var date=time.getDate();
    var thisyear=time.getYear();
    var day=time.getDay();

    var month = ("0" + (time.getMonth() + 1)).slice(-2);

    if (thisyear < 2000)
    thisyear = thisyear + 1900;
    if(day==1) DayofWeek = "Понедельник";
    if(day==2) DayofWeek = "Вторник";
    if(day==3) DayofWeek = "Среда";
    if(day==4) DayofWeek = "Четверг";
    if(day==5) DayofWeek = "Пятница";
    if(day==6) DayofWeek = "Суббота";
    if(day==7) DayofWeek = "Воскресенье";
    document.write(DayofWeek + " " + thisyear + "-" + date + "-" + month);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // добавление нуля перед эл-ми времени
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s ;
    t = setTimeout(function() {
        startTime()
    }, 500);
}
startTime();

/* ----------------------- Задание 2 --------------------------- */
// Названия месяцев
function calendar() {
calendar.monthName=[
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

// Названия дней недели
calendar.dayName=[
    'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'
];

// Выбранная дата
calendar.selectedDate = {
    'Day' : null,
    'Month' : null,
    'Year' : null
};

// ID элемента для размещения календарика
calendar.element_id=null;

// Выбор даты
calendar.selectDate = function(day,month,year) {
    calendar.selectedDate={
        'Day' : day,
        'Month' : month,
        'Year' : year
    };
    calendar.drawCalendar(month,year);
}

// Отрисовка календарика на выбранный месяц и год
calendar.drawCalendar = function(month,year) {
    var tmp='';
    tmp+='<table class="calendar" cellspacing="0" cellpadding="0">';

    // Месяц и навигация
    tmp+='<tr>';
    tmp+='<td class="navigation" '+
        'onclick="calendar.drawCalendar('+(month>1?(month-1):12)+
        ','+(month>1?year:(year-1))+');">&#9668;<\/td>';
    tmp+='<td colspan="5" class="navigation" '+
        'onclick="calendar.drawCalendar('+
        calendar.selectedDate.Month+','+
        calendar.selectedDate.Year+');">'+
        calendar.monthName[(month-1)]+' - '+year+'<\/td>';
    tmp+='<td class="navigation" '+
        'onclick="calendar.drawCalendar('+(month<12?(month+1):1)+
        ','+(month<12?year:(year+1))+');">&#9658;<\/td>';
    tmp+='<\/tr>';

    // Шапка таблицы с днями недели
    tmp+='<tr>';
    tmp+='<th>'+calendar.dayName[0]+'<\/th>';
    tmp+='<th>'+calendar.dayName[1]+'<\/th>';
    tmp+='<th>'+calendar.dayName[2]+'<\/th>';
    tmp+='<th>'+calendar.dayName[3]+'<\/th>';
    tmp+='<th>'+calendar.dayName[4]+'<\/th>';
    tmp+='<th class="holiday">'+calendar.dayName[5]+'<\/th>';
    tmp+='<th class="holiday">'+calendar.dayName[6]+'<\/th>';
    tmp+='<\/tr>';

    // Количество дней в месяце
    var total_days = 32 - new Date(year, (month-1), 32).getDate();
    // Начальный день месяца
    var start_day = new Date(year, (month-1), 1).getDay();
    if (start_day==0) { start_day=7; }
    start_day--;
    // Количество ячеек в таблице
    var final_index=Math.ceil((total_days+start_day)/7)*7;

    var day=1;
    var index=0;
    do {
        // Начало строки таблицы
        if (index%7==0) {
            tmp+='<tr>';
        }

        // Пустые ячейки до начала месяца или после окончания
        if ((index<start_day) || (index>=(total_days+start_day))) {
            tmp+='<td class="grayed"> <\/td>';
        }
        else {
            var class_name='';
            // Выбранный день
            if (calendar.selectedDate.Day==day &&
                calendar.selectedDate.Month==month &&
                calendar.selectedDate.Year==year) {
                class_name='selected';
            }

            // Праздничный день
            else if (index%7==6 || index%7==5) {
                class_name='holiday';
            }
            // Ячейка с датой
            tmp+='<td class="'+class_name+'" '+
                'onclick="calendar.selectDate('+
                day+','+month+','+year+');">'+day+'<\/td>';
            day++;
        }
        // Конец строки таблицы
        if (index%7==6) {
            tmp+='<\/tr>';
        }

        index++;
    }

    while (index<final_index);

    tmp+='<\/table>';

    // Вставить таблицу календарика на страницу
    var el=document.getElementById(calendar.element_id);
    if (el) {
        el.innerHTML=tmp;
    }
}

// ID элемента для размещения календарика
calendar.element_id = 'calendar_table';

// По умолчанию используется текущая дата
calendar.selectedDate={
    'Day' : new Date().getDate(),
    'Month' : parseInt(new Date().getMonth())+1,
    'Year' : new Date().getFullYear()
};

// Нарисовать календарик
calendar.drawCalendar(
    calendar.selectedDate.Month,
    calendar.selectedDate.Year);
}
/* ----------------------- Задание 4 --------------------------- */
function color(){
    window.onload = function() {
        var lol = Math.floor(Math.random() * 3) + 1;

        var first=document.getElementById('first');
        var second=document.getElementById('second');
        var third=document.getElementById('third');

        switch (lol)
            {
            case 1: first.style.display = 'block';break;
            case 2: second.style.display = 'block';break;
            case 3: third.style.display = 'block';break;
            default: first.style.display = 'block';break;
            }
        }
}
function color_rand(){
    setInterval(function() {
        document.getElementById("ddd").style.backgroundColor = '#'+((1<<24)*Math.random()|0).toString(16)
        }, 150)
}

/* ----------------------- Задание 8 --------------------------- */
function ex8(){
    const img=document.querySelector("#logo");
    const text=document.querySelector("#textlogo");
    logo.addEventListener('mouseover',function(){
    img.style.opacity = '0';})
    logo.addEventListener('mouseout',function(){
    img.style.opacity = '1';})
}


var name_array=[];
var display_array=[];
var display_array_sort=[];

function submit(){

    for(var array=1; array<=4; array++){
        var n=document.getElementById("name_"+ array).value;
        name_array.push(n);
    }

    console.log(name_array);
    var len=name_array.length;
    console.log(len);

    for(var i=0; i<len; i++){
        display_array.push("<h4>NAME - "+name_array[i]+"</h4>");
    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var remove=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
};
function sort(){
    name_array.sort();
    console.log(name_array);

    var len=name_array.length;
    console.log(len);

    for(var i=0; i<len; i++){
        display_array_sort.push("<h4>NAME - "+name_array[i]+"</h4>");
    }
    console.log(display_array_sort);

    document.getElementById("display_name_with_commas").innerHTML=name_array;

    var remove=display_array_sort.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit").style.display="inline-block";
    document.getElementById("sort").style.display="none";
}
function update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+ name_array +"</h1>";
}
function saveInfo(){
    var first = $("#Yname");
    var second = $("#Tname");

    var third = first.val();
    var fourth = second.val();

    var fifth = third;
    var sixth = fourth;

    var name = fifth.slice(0,1);
            var name1 = sixth.slice(0,1);
            var name2 = fifth.slice(1,100);
            var name3 = sixth.slice(1,100);

            var name4 = name.toUpperCase();
            var name5 = name1.toUpperCase();

            var name6 = name2.toLowerCase();
            var name7 = name3.toLowerCase();

            var name8 = name4 + name6;
            var name9 = name5 + name7;

                var randomNumber = Math.floor(Math.random()*100)+1;


    alert( "The love Compatabilty between " + name8 + " and "+ name9 + " is " + randomNumber + "%.");
}
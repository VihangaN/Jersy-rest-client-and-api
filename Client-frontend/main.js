

$('document').ready(() => {




  // employee object

  let emdata = {
    eId: "",
    address: "",
    age: 0,
    email: "",
    gender: "",
    name: "",
    nic: "",
    type: true

  };

  // POST or PUT  

  let param_type;


  // toggle button events

  const btn = $("#staffType");
  const typetext = $("#type");
  const modal = $("#modal");
  let memberCount;
  let med = 0;
  let non = 0;


  $(btn).click(() => {

    if (btn.text() == "Medical staff") {
      btn.text("Non Medical staff");
      typetext.text(" Medical ");

      medical();
    }
    else {
      btn.text("Medical staff");
      typetext.text("Non Medical ");
      nonMedical();
    }

    btn.toggleClass("active");


  })


  // tooltip


  $("#viewAll").mouseenter(() => {
    $("#tooltip").animate({ width: '180px' }).animate({ height: 'auto' }).animate({ opacity: '1' }, (10));
  }).mouseleave(() => {
    $("#tooltip").animate({ width: '0px' }).animate({ opacity: '0' }, (1));
  });


  // View All button event


  $("#viewAll").click(() => {
    allMedical();
  })



  //  ------------------------------------- All get methods -------------------------------------



  // get medical staff

  medical = () => {


    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:8080/Healthcare/webapi/staff',
      data: { get_param: 'value' },
      dataType: 'json',
      success: (data) => {
        console.log(data);
        memberCount = data.length;
        $('#data').find('tbody').empty();
        $.each(data, function (key, value) {

          if (value.type == true) {

            $("tbody").append(`
            <tr></tr>
            <tr>
            <td id="id">${value.eId}</td>
            <td id="name">${value.name}</td>
            <td id="age">${value.age}</td>
            <td id="gender">${value.gender}</td>
            <td id="nic">${value.nic}</td>
            <td id="email">${value.email}</td>
            <td id="address">${value.address}</td>
            <td>
            <button id="edit"></button>
            <button id="delete"></button>
            </td>
                  </tr>
            
            `);

            med = med + 1;

          }

          else {

          }

        });


      }
    });
    progress("med", med, memberCount);
    pcount(med);
    med = 0;

  }


  // get Non medical staff

  nonMedical = () => {

    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:8080/Healthcare/webapi/staff',
      data: { get_param: 'value' },
      dataType: 'json',
      success: (data) => {
        console.log(data);
        $('#data').find('tbody').empty();
        $.each(data, function (key, value) {

          if (value.type == false) {

            $("tbody").append(`
            <tr></tr>
            <tr>
            <td id="id">${value.eId}</td>
            <td id="name">${value.name}</td>
            <td id="age">${value.age}</td>
            <td id="gender">${value.gender}</td>
            <td id="nic">${value.nic}</td>
            <td id="email">${value.email}</td>
            <td id="address">${value.address}</td>
            <td>
            <button id="edit"></button>
            <button id="delete"></button>
            </td>
                  </tr>
            
            `);

            non = non + 1;

          }

          else {

          }

        });
        memberCount = data.length;
        progress("non", non, memberCount);
        pcount(non);
        non = 0;
      }
    });



  }

  // getAll data


  allMedical = () => {
    typetext.text(" All ");
    $('#data').find('tbody').empty();
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:8080/Healthcare/webapi/staff',
      data: { get_param: 'value' },
      dataType: 'json',
      success: (data) => {
        console.log(data);
        $.each(data, function (key, value) {
          $('#data').find('tbody').append(`
          <tr></tr>
          <tr>
          <td id="id">${value.eId}</td>
            <td id="name">${value.name}</td>
            <td id="age">${value.age}</td>
            <td id="gender">${value.gender}</td>
            <td id="nic">${value.nic}</td>
            <td id="email">${value.email}</td>
            <td id="address">${value.address}</td>
          <td>
          <button id="edit"></button>
          <button id="delete"></button>
          </td>
                </tr>
          
          `);


        });
        memberCount = data.length;
        progress(memberCount);
        pcount(memberCount);
      }
    });
  }

  // initialize data



  typetext.text(" All ");

  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8080/Healthcare/webapi/staff',
    data: { get_param: 'value' },
    dataType: 'json',
    success: (data) => {
      console.log(data);

      $.each(data, function (key, value) {


        $('#data').find('tbody').append(`
          <tr></tr>
          <tr>
          <td id="id">${value.eId}</td>
          <td id="name">${value.name}</td>
          <td id="age">${value.age}</td>
          <td id="gender">${value.gender}</td>
          <td id="nic">${value.nic}</td>
          <td id="email">${value.email}</td>
          <td id="address">${value.address}</td>
                  <td>
                  <button id="edit"></button>
                  <button id="delete"></button>
                  </td>
                </tr>
          
          `);

        memberCount = data.length;
        console.log(memberCount);

      });

      pcount(memberCount);

    }
  });


  // ----------------------------------------- POST method -------------------------------


  addmember = () => {

    $.ajax({
      type: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      url: 'http://127.0.0.1:8080/Healthcare/webapi/staff/add',
      data: JSON.stringify(emdata),
      dataType: 'json',
      success: (data) => {
        console.log(data);
        refresh();

      }
    });

  }



  //-------------------------------------------- DELETE method -----------------------------


  deletemember = () => {

    $.ajax({
      type: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      url: 'http://127.0.0.1:8080/Healthcare/webapi/staff/' + emdata.eId,
      data: JSON.stringify(emdata),
      dataType: 'json',
      success: (data) => {
        console.log(data);
        refresh();
      }
    });

  }


  // ----------------------------------------- PUT method ----------------------------------


  updatemember = () => {
    console.log(emdata.eId);
    $.ajax({
      type: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      url: 'http://127.0.0.1:8080/Healthcare/webapi/staff/update',
      data: JSON.stringify(emdata),
      dataType: 'json',
      success: (data) => {
        console.log("response" + data);

      },
      error: (err) => {
        console.log(err);
        refresh();
      }

    });

  }




  // ----------------------- ajax start and stop functions - loading image --------------------



  $(document).ajaxStart(() => {
    $("#loader").show();
  })

  $(document).ajaxStop(() => {
    $("#loader").hide();
  })


  // ------------------------------------- Search --------------------------------

  $('.no_result').hide();
  $('#search').keyup(function () {

    let search = $(this).val();


    $('table tbody tr').hide();

    var len = $('table tbody tr:not(.no_result) td:contains("' + search + '")').length;

    if (len > 0) {

      $('table tbody tr:not(.no_result) td:contains("' + search + '")').each(function () {
        $(this).closest('tr').show();
      });
    } else {
      $('.no_result').show();
    }

  })

  $("#search").blur(function () {
    let search = $(this).val();

    if (search == "") {
      $('table tbody tr').show();
      $('.no_result').hide();

    }
    else {

    }

  })





  // -------------------------------- theme swithcher ---------------------------



  // Get default theme from l.s
  const isDark = localStorage.getItem('isDark');
  if (isDark == 'true') {

    $('link[href="style.css"]').attr('href', 'dark.css');
    $("#switch").attr('src', './assets/light.svg');
    $("#progress_count").css({ "fill": "#969292" });
  }
  else {
    $('link[href="dark.css"]').attr('href', 'style.css');
    $("#switch").attr('src', './assets/dark.svg');
  }

  // theme toggle

  let theme = "light";

  $("#switch").click(() => {

    if (theme == "light") {
      blur();
      $('link[href="style.css"]').attr('href', 'dark.css');
      $("#switch").attr('src', './assets/light.svg');
      $("#progress_count").css({ "fill": "#969292" });
      localStorage.setItem('isDark', "true");
      theme = "dark";
    }
    else {
      blur();
      $('link[href="dark.css"]').attr('href', 'style.css');
      $("#switch").attr('src', './assets/dark.svg');
      localStorage.setItem('isDark', "false");
      theme = "light";
    }

  })

  let blur = () => {
    $("body").addClass("blur").delay(1000).queue(() => {
      $("body").removeClass('blur').dequeue();
    });
  }


  // ----------------------------------- popup modal -------------------------------

  //  event listners for modal


  const table = $("#table");

  $("#data").on('click', '#edit', (function () {
    const id = $(this).closest("tr").find("#id").text();

    // asign values to popup modal's form 


    const name = $(this).closest("tr").find("#name").text();
    const age = $(this).closest("tr").find("#age").text();
    const gender = $(this).closest("tr").find("#gender").text();
    const nic = $(this).closest("tr").find("#nic").text();
    const email = $(this).closest("tr").find("#email").text();
    const address = $(this).closest("tr").find("#address").text();

    $("#eName").val(name);
    $("#eAge").val(age);
    $("#eGender").val(gender);
    $("#eNic").val(nic);
    $("#eEmail").val(email);
    $("#eAddress").val(address);


    emdata.eId = id; // add eid to employee object to update record
    // table.hide();
    popup('edit', id);
    console.log(emdata.eId);

    console.log("update" + emdata.eId);
  }));

  $("#addMember").click(() => {
    popup('add');
    emdata.eId = null; // remove eid from employee object to auto increment eid
    console.log(emdata);
  })

  // handle delete

  $("#data").on('click', '#delete', (function () {
    const id = $(this).closest("tr").find("#id").text();
    emdata.eId = id; // add eid to employee object to update record
    // table.hide();
    alert(emdata.eId);
    deletemember();

    console.log("delete" + emdata.eId);
  }));


  // modal

  let modalTitle = $("#mtitle");

  popup = (type, id) => {
    if (type == 'edit') {
      modalTitle.text(`Edit member ${id}`);
      modal.fadeIn();
      $("#addbtn").text("update")
      param_type = false; // set paramater type to true for put request
    }
    else if (type == 'add') {
      modalTitle.text("Add new member");
      modal.fadeIn();
      $("#addbtn").text("Add member")
      param_type = true; // set paramater type to true for post request
    }


  }

  // handle modal close

  mclose = () => {
    $(modal).css({ 'display': 'none' }, 600);
    table.show()
  }


  // handle form sumbit


  $('#form').submit((e) => {

    console.log(param_type);
    e.preventDefault();

    let emName = $("#eName").val();
    let emAge = $("#eAge").val();
    let emGender = $("#eGender").val();
    let emNic = $("#eNic").val();
    let emEmail = $("#eEmail").val();
    let emAddress = $("#eAddress").val();
    let emType = $("#eType").val();

    // call validate form function and return success

    const success = validate(
      emName, emAge, emNic,
      emAddress);


    // assign form data to employee object

    if (success) {

      emdata.name = emName;
      emdata.age = emAge;
      emdata.gender = emGender;
      emdata.nic = emNic;
      emdata.email = emEmail;
      emdata.address = emAddress;
      emdata.type = emType;

      console.log(emdata);


      if (param_type == true) {
        addmember();
        console.log(param_type);

        console.log(emdata);
      }
      else if (param_type == false) {
        updatemember();
        console.log(emdata);
        console.log(param_type);
      }
      else {

      }




    } else {
      done = false;
    }






  });



  // --------------------- validate form ---------------------
  // html form validations already added --- re validate (if user edit elements by using dev tools) 



  validate = (name, age, nic, address) => {

    const textonly = new RegExp("^[a-zA-Z ]*$"); // regex for text and spaces (only)

    if ($.trim(name) == '') {
      alert("name not valid");
    }
    else if ($.trim(age) == '') {
      alert("age not valid");
    }
    else if ($.trim(nic) == '') {
      alert("nic not valid");
    }
    else if ($.trim(address) == '') {
      alert("address not valid");
    }
    else if (age < 18 || age > 50) {
      alert("age not valid please input age between 18 - 50 ");
    }
    else if (address.length < 10) {
      alert("address must be greater than 10  charactors");
    }
    else if (nic.length < 10) {
      alert(nic + " notvalid ! please input valid id card number");
    }
    else if ((textonly.test(name) !== true)) {
      alert("text only")
    }
    else {
      return true;
    }

  }




  // --------------------------------- svg progress bar -----------------------------

  // Radial progress

  progress = (type, part, all) => {


    let present;

    if (part == 0) {
      present = 1;
      $("#progress").animate({ 'stroke-dashoffset': progress }).css({ 'stroke': '#F4F4F4', 'transition': '1s' });

    }
    else {

      present = (part / all) * 100 / 100;
      console.log("100 present " + present);

      let progress = 339.292 * (1 - present);
      console.log(`presentage is ${progress}`);

      let color = "#e6e6e6";

      let nonColor = "#ff9f1a";
      let medColor = "#3498DB";


      if (type == "med") {
        color = medColor;
      }
      else if (type == "non") {
        color = nonColor;
      }

      else {
        color = "#e6e6e6"
      }

      $("#progress").animate({ 'stroke-dashoffset': progress }).css({ 'stroke': color, 'transition': '1s' });



    }


  }

  // update progress number


  pcount = (num) => {
    $("#progress_count").text(num);
  }

  // refresh page

  refresh = () => {
    location.reload();
  }

});







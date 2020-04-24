

$('document').ready(() => {

     

  

// toggle button events

    const btn = $("#staffType");
    const typetext = $("#type");
    const modal = $("#modal");
    let memberCount = 60;
    let med = 0;
    let non =0;
    

    $(btn).click(()=>{

      if(btn.text()== "Medical staff"){
        btn.text("Non Medical staff");
        typetext.text("Non Medical ");
        nonMedical();
      }
      else{
        btn.text("Medical staff");
        typetext.text("Medical ");
        medical();
      }
      
    btn.toggleClass("active");
    
    
    })


    // tooltip


    $("#viewAll").mouseenter(()=> {
      $("#tooltip").animate({width: '180px'}).animate({height: 'auto'}).animate({opacity: '1'},(10));
  }).mouseleave(()=> {
       $("#tooltip").animate({width: '0px'}).animate({opacity: '0'},(1));
  });


  // View All button events


  $("#viewAll").click(()=>{
    allMedical();
  })

// get medical staff

medical= ()=>{

  $.ajax({ 
    type: 'GET', 
    url: 'http://dummy.restapiexample.com/api/v1/employees', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: (data)=> { 
      console.log(data);
      $('#data').find('tbody').empty();
        $.each(data.data, function(key, value) {

          $("tbody").append(`
          <tr></tr>
          <tr>
                  <td id="id">${value.id}</td>
                  <td>${value.employee_name}</td>
                  <td>${value.employee_age}</td>
                  <td>${value.employee_salary}</td>
                  <td>${value.profile_image}</td>
                  <td>
                  <button id="edit"></button>
                  <button id="delete"></button>
                  </td>
                </tr>
          
          `);

          med=med+1;
        });

        progress("med",60,memberCount);
        pcount(60);
        med=0;
    }
  });


}
   

// get Non medical staff

nonMedical= ()=>{
  
  $.ajax({ 
    type: 'GET', 
    url: 'http://dummy.restapiexample.com/api/v1/employees', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: (data)=> { 
      console.log(data);
      $('#data').find('tbody').empty();
        $.each(data.data, function(key, value) {

          if(value.employee_age > 30){

            $("tbody").append(`
            <tr></tr>
            <tr>
                    <td id="id">${value.id}</td>
                    <td>${value.employee_name}</td>
                    <td>${value.employee_age}</td>
                    <td>${value.employee_salary}</td>
                    <td>${value.profile_image}</td>
                    <td>
                    <button id="edit"></button>
                    <button id="delete"></button>
                    </td>
                  </tr>
            
            `);

            non= non+1;
            pcount(6);
          }

          else{

          }
         
        });

        progress("non",6,memberCount);
        non =0;
    }
  });



}

// getAll data


allMedical=()=>{
  typetext.text(" All ");
  $('#data').find('tbody').empty();
  $.ajax({ 
    type: 'GET', 
    url: 'http://dummy.restapiexample.com/api/v1/employees', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: (data)=> { 
      console.log(data);
      
        $.each(data.data, function(key, value) {
          $('#data').find('tbody').append(`
          <tr></tr>
          <tr>
                  <td id="id">${value.id}</td>
                  <td>${value.employee_name}</td>
                  <td>${value.employee_age}</td>
                  <td>${value.employee_salary}</td>
                  <td>${value.profile_image}</td>
                  <td>
                  <button id="edit"></button>
                  <button id="delete"></button>
                  </td>
                </tr>
          
          `);

          
        });

        progress(memberCount);
        pcount(memberCount);
    }
  });
}

// initialize data



typetext.text(" All ");

$.ajax({ 
  type: 'GET', 
  url: 'http://dummy.restapiexample.com/api/v1/employees', 
  data: { get_param: 'value' }, 
  dataType: 'json',
  success: (data)=> { 
    console.log(data);
      $.each(data.data, function(key, value) {

       
        $('#data').find('tbody').append(`
          <tr></tr>
          <tr>
                  <td id="id">${value.id}</td>
                  <td>${value.employee_name}</td>
                  <td>${value.employee_age}</td>
                  <td>${value.employee_salary}</td>
                  <td>${value.profile_image}</td>
                  <td>
                  <button id="edit"></button>
                  <button id="delete"></button>
                  </td>
                </tr>
          
          `);
    
          // memberCount = data.data.length;
          console.log(memberCount);
         
      });

      pcount(memberCount);
     
  }
});


// ajax start and stop functions - loading image



$(document).ajaxStart(()=> {
  $("#loader").show();
})

$(document).ajaxStop(()=> {
  $("#loader").hide();
})


// Search

$('.no_result').hide();
$('#search').keyup(function(){
 
  var search = $(this).val();

  
  $('table tbody tr').hide();

  var len = $('table tbody tr:not(.no_result) td:contains("'+search+'")').length;

  if(len > 0){
   
    $('table tbody tr:not(.no_result) td:contains("'+search+'")').each(function(){
      $(this).closest('tr').show();
    });
  }else{
     $('.no_result').show();
  }
  
})


//test

$("#modal").click(function(){
  $(this).css({'display':'none'},600);
 
 table.show()

})

//  event listners for modal


const table = $("#table");

$("#data").on('click','#edit',(function() {
  const id = $(this).closest("tr").find("#id").text();
  table.hide();
  popup('edit',id);
}));

 $("#addMember").click(()=>{
  popup('add');
 })


// modal

let modalTitle = $("#mtitle");

popup = (type,id)=>{
  if(type=='edit'){
    modalTitle.text(`Edit member ${id}`);
    modal.fadeIn();
  }
  else if(type=='add'){
    modalTitle.text("Add new member");
    modal.fadeIn();
  }
  
 
}


// Radial progress

progress = (type,part,all)=>{
 

  let present;

  if(part == 0){
    present = 1;
    $("#progress").animate({'stroke-dashoffset': progress}).css({'stroke':'#F4F4F4','transition':'1s'});
  
  }
  else{
  
  present = (part/all)*100/100;
  console.log("100 present "+present);
  
  let progress = 339.292 * (1 - present);
  console.log(`presentage is ${progress}`);
  
  let color = "#e6e6e6";
  
  let nonColor = "#ff9f1a";
  let medColor ="#3498DB";

  
  if(type=="med"){
    color =  medColor;
  }
  else if(type== "non"){
    color = nonColor;
  }

  else{
    color="#e6e6e6"
  }
  
  $("#progress").animate({'stroke-dashoffset': progress}).css({'stroke':color,'transition':'1s'});
  
  
  
  }

  
}

// update progress number


pcount = (num)=>{
  $("#progress_count").text(num);
}
  
  

});







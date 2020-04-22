

$('document').ready(() => {

     

  

// toggle button

    const btn = $("#staffType");
    const typetext = $("#type");
   
   

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

// get medical staff

medical= ()=>{

  $.ajax({ 
    type: 'GET', 
    url: 'http://dummy.restapiexample.com/api/v1/employees', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: (data)=> { 
      console.log(data);
        $.each(data.data, function(key, value) {
          $("tbody").append(`
          <tr></tr>
          <tr>
                  <td>${value.id}</td>
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
    }
  });


}
   

// get Non medical staff

nonMedical= ()=>{
  
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

       
        $("tbody").append(`
        <tr></tr>
        <tr>
                <td>${value.id}</td>
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




});







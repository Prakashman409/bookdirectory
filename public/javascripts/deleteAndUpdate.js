$(document).ready(function(){
    /* $('input#update').on('click',function(){
     var bookName=$('this').siblings('.forDelete').text();
     console.log(bookName);


  
       $.ajax({
        url:'getreadbook',
        data:data,
        type:'DELETE',
        success:function(){
          window.location.reload();

        }
       })
     }); */

     $('input#delete').on('click',function(){
        var bookName=$(this).siblings('.forDelete').text();
        var name={book:bookName}
        console.log(name);
        $.ajax({
            url:'getreadbook',
            data:name,
            type:'DELETE',
            success:function(){
              location.reload();

            }
        })
      });
      
     $('input#wishdelete').on('click',function(){
        var bookName=$(this).siblings('.forDelete').text();
        var name={book:bookName}
        console.log(name);
        $.ajax({
            url:'wishbooklist',
            data:name,
            type:'DELETE',
            success:function(){
              location.reload();

            }
        })
      });

      $('input#update').on('click',function(){
            var bookName=$(this).siblings('.forDelete').text();
            $('div.modal-bg').addClass('bg-active');
            $('button.btn').on('click',function(){
                var updateValue=$('input.updateData').val();

                var name={
                    book:bookName,
                    updateBook:updateValue
                }
               $.ajax({
                  url:'wishbooklist',
                  data:name,
                  type:'PUT',
                  
                  success:function(){
                      location.reload();
                  }
               })
               $('div.modal-bg').removeClass('bg-active');
            })
      });


    

     


      $('h3.cancel').on('click',function(){
        $('div.modal-bg').removeClass('bg-active');
    })
    

 });

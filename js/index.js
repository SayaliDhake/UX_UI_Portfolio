// toggle effect to navigation bar//
  $(document).ready(function(){
    $(".arrow").click(function(){
      $(".home").fadeToggle();
    });

    $(".skillPage").click(function(){
        window.location.href = "myskills.html"
    })

    $(".aboutPage").click(function(){
        window.location.href = "index.html"
    })

    $(".workPage").click(function(){
        window.location.href = "mywork.html"
    })

    $(".derive").click(function(){
      window.location.href = "derive.html"
  })

  });

//arrow animation/


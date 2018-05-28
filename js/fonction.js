$(function () {

    var bouton = $(".b");
    var plus_moins = $(".plus_moins");
    var div_mult = $(".div_mult");

    var affichage = $(".affichage");
    var affichage1 = $(".affichage1");
    var egal = $(".bb");
    var point = $(".point");
    var symbole = $(".symbole");
    var vider = $(".b_AC");
    var pourcentage = $(".pourcentage");
    var effacer = $(".effacer");
    var racine = $(".racine");
    var sin = $(".sin");
    var cos = $(".cos");
    var tan = $(".tan");
    var ln = $(".ln");
    var pi = $(".pi");
    var pp1 = $(".pp1");
    var pp2 = $(".pp2");
    var rad = $(".rad");
    var deg = $(".deg");
    var expo = $(".expo");
    var log10 = $(".log10");
    var puissance = $(".puissance");
    var nombre_de_parenthese = 0;
    var deg_rad = 0;

rad.click(function () {
  deg_rad=0;  
    
    
});
  
  
   
   
deg.click(function () {
    
deg_rad=1; 
   
});

    
    div_mult.click(function () {
          var valeur= $(this).val();
      

           var valeur_actuelle = affichage.val();
           var valeur_actuelle1 = affichage1.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

        
if (lettre_avant == "(" || lettre_avant == "+" || lettre_avant =="-" || lettre_avant=="s" || lettre_avant=="*" || lettre_avant=="n" || lettre_avant=="/" || valeur_actuelle=="0" || lettre_avant==".") {}
        else{
                if (affichage.val() == 0) {

            affichage.val(valeur);
            affichage1.val(valeur);
        } else {

            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur);
        }
            
            
        }
            

});
    
    plus_moins.click(function () {
          var valeur= $(this).val();
       
           var valeur_actuelle = affichage.val();
           var valeur_actuelle1 = affichage1.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

        
if ( lettre_avant == "+" || lettre_avant =="-" || lettre_avant=="s" || lettre_avant=="*" || lettre_avant=="n" || lettre_avant=="/" || lettre_avant==".") {}
        else{
                if (affichage.val() == 0) {

            affichage.val(valeur);
            affichage1.val(valeur);
        } else {

            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur);
        }
            
            
        }
            

});
    
   
    
    

    bouton.click(function () {
        
        var valeur= $(this).val();
        var valeur1= $(this).html();
           var valeur_actuelle = affichage.val();
           var valeur_actuelle1 = affichage1.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == ")" || lettre_avant == "I" || lettre_avant =="n" || lettre_avant=="s" ) {}
        else{
        


        if (valeur_actuelle == "0" && valeur != ".") {

            affichage.val(valeur);
            affichage1.val(valeur1);
        } else {


            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1);

        }
        }


    });


    egal.click(function () {
        
        

        var amar = affichage.val();
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage.val();
  
        affichage.val(eval(valeur_actuelle));
        affichage1.val(eval(valeur_actuelle1));



    });




    point.click(function () {
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

        if (lettre_avant == "+" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/" || lettre_avant == "=") {} else {

            var valeur = $(this).val();
            var valeur = $(this).val();
            var valeur1 = $(this).html();
            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1);
            point.prop("disabled", 'true');

        }


    });

    symbole.click(function () {
        point.removeAttr("disabled"); //réactiver le bouton virgule une fois qu'on a appuié sur un symbole (+, -, X, /, =)
    });


    vider.click(function () {
        point.removeAttr("disabled"); //réactiver le bouton virgule
        affichage.val("0"); //mettre l'afficheur à 0
        affichage1.val("0"); //mettre l'afficheur à 0
        nombre_de_parenthese = 0; // remettre le compteur qui compte le nombre de parenthèses à 0

    });

    pourcentage.click(function () {
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];
//si la derniere saisie n'est pas un nombr, le bouton % ne s'exécute pas
        if (lettre_avant == "+" || lettre_avant == "0" || lettre_avant == "" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/" || lettre_avant == "=") {} 
        
        else {

            var valeur = $(this).val();
        var valeur1 = $(this).html();
            
          
            affichage.val(valeur_actuelle + valeur);
            
             
            affichage1.val(valeur_actuelle1 + valeur1);


        }


    });

    effacer.click(function () {
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        var taille = valeur_actuelle.length;
        var taille1 = valeur_actuelle1.length;
        var amar = valeur_actuelle;
        var amar1 = valeur_actuelle1;
     

        var affiche = "";
        var affiche1 = "";
        
        
        

        
        
        if (amar[taille-1] == "(") {
            nombre_de_parenthese = nombre_de_parenthese - 1;
         
        }
        if (amar[taille-1] == ")") {
            nombre_de_parenthese = nombre_de_parenthese + 1;
            
        }
        if (taille == 1) {
            affichage.val("0");
          
        }
     //Pour COS LN SIN   
    else if(amar[taille-1] == "s" || amar[taille-1] == "n" || amar[taille-1] == "g" || amar[taille-1] == "p" ) { 
        for (var i = 0; i < taille - 8; i++) {
                var affiche = affiche + amar[i];
            }
        
        
        if (affiche=="")
            affichage.val(0);
        
        else
        
       affichage.val(affiche);
    }
        //POUR PI
            else if(amar[taille-1] == "I" ) { 
        for (var i = 0; i < taille - 7; i++) {
                var affiche = affiche + amar[i];
            }
        
        
        if (affiche=="")
            affichage.val(0);
        
        else
        
       affichage.val(affiche);
    }
        
          else if(amar1[taille1-1] == "%" ) { 
        for (var i = 0; i < taille - 8; i++) {
                var affiche = affiche + amar[i];
            }
        
        
        if (affiche=="")
            affichage.val(0);
        
        else
        
       affichage.val(affiche);
    }    
        
        //POur la racine
             else if(amar[taille-1] == "t" ) { 
        for (var i = 0; i < taille - 9; i++) {
                var affiche = affiche + amar[i];
            }
        
        
        if (affiche=="")
            affichage.val(0);
        
        else
        
       affichage.val(affiche);
    }
        
        
        else {
            for (var i = 0; i < taille - 1; i++) {
                var affiche = affiche + amar[i];
               

            }
            affichage.val(affiche);
    

        }
        
        
        
        
        
        
        
        
        
        
         if (taille1 == 1) {
     
            affichage1.val("0");
             
        } 
         else if(amar1[taille1-1] == "s" || amar1[taille1-1] == "n" || amar1[taille1-1] == "g" ) {
             if(amar1[taille1-2] == "L"){
                     for (var i = 0; i < taille1 - 2; i++) {
                var affiche1 = affiche1 + amar1[i];
            }
                 
                 
             }
       
                 
             
        
             
             else{
        for (var i = 0; i < taille1 - 3; i++) {
                var affiche1 = affiche1 + amar1[i];
            }
         }
            if (affiche1=="")
            affichage1.val(0);
        
        else
        
       affichage1.val(affiche1);
    }
        
        else {
            for (var i = 0; i < taille1 - 1; i++) {
                var affiche1 = affiche1 + amar1[i];
               

            }
            affichage1.val(affiche1);
    

        }


    });

    racine.click(function () {
                   var valeur_actuelle = affichage.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "+" || lettre_avant == "(" ||  lettre_avant == "0" || lettre_avant == "" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/") {
        
        var valeur = $(this).val();
        var valeur1 = $(this).html();
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        if (affichage.val() == 0) {

            affichage.val(valeur);
            affichage1.val(valeur1 + "(");
        } else {

            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1 + "(");
        }
        nombre_de_parenthese = nombre_de_parenthese + 1;


        }
    });
    
    
      puissance.click(function () {

    
    
});

    
     sin.click(function () {
                   var valeur_actuelle = affichage.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "+" || lettre_avant == "(" ||  lettre_avant == "0" || lettre_avant == "" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/" ) {
        if (deg_rad==0){
        var valeur = $(this).val();
        }
         else{
             
            var valeur=$(this).val()+ "Math.PI/180 *";
         }
            
            
        var valeur1 = $(this).html();
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        if (affichage.val() == 0) {

            affichage.val(valeur);
            affichage1.val(valeur1 + "(");
        } else {

            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1 + "(");
        }
        nombre_de_parenthese = nombre_de_parenthese + 1;


        }
       
    });
    
    
     cos.click(function () {
                   var valeur_actuelle = affichage.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "+" || lettre_avant == "(" ||  lettre_avant == "0" || lettre_avant == "" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/" ) {
        
          if (deg_rad==0){
        var valeur = $(this).val();
        }
         else{
             
            var valeur=$(this).val()+ "Math.PI/180 *";
         }
        var valeur1 = $(this).html();
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        if (affichage.val() == 0) {

            affichage.val(valeur);
            affichage1.val(valeur1 + "(");
        } else {

            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1 + "(");
        }
        nombre_de_parenthese = nombre_de_parenthese + 1;


        }
       
    });

    
        tan.click(function () {
                   var valeur_actuelle = affichage.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "+" || lettre_avant == "(" ||  lettre_avant == "0" || lettre_avant == "" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/" ) {
        
          if (deg_rad==0){
        var valeur = $(this).val();
        }
         else{
             
            var valeur=$(this).val()+ "Math.PI/180 *";
         }
        var valeur1 = $(this).html();
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        if (affichage.val() == 0) {

            affichage.val(valeur);
            affichage1.val(valeur1 + "(");
        } else {

            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1 + "(");
        }
        nombre_de_parenthese = nombre_de_parenthese + 1;


        }
       
    });
    
    
        ln.click(function () {
            
            
                               var valeur_actuelle = affichage.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "+" || lettre_avant == "(" ||  lettre_avant == "0" || lettre_avant == "" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/" ) {
        
        var valeur = $(this).val();
      
        var valeur1 = $(this).html();
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        if (affichage.val() == 0) {

            affichage.val(valeur);
            affichage1.val(valeur1 + "(");
        } else {

            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1 + "(");
        }
        nombre_de_parenthese = nombre_de_parenthese + 1;


        }
       
});
         log10.click(function () {
            
            
                               var valeur_actuelle = affichage.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "+" || lettre_avant == "(" || lettre_avant == "0" || lettre_avant == "-" || lettre_avant == "" || lettre_avant == "*" || lettre_avant == "/" ) {
        
        var valeur = $(this).val();
      
        var valeur1 ="log10("
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        if (affichage.val() == 0) {
          
 affichage.val(valeur);
            affichage1.val(valeur1);
        } else {

            affichage.val(valeur_actuelle +valeur);
            affichage1.val(valeur_actuelle1 + valeur1 );
        }
        


        }
       
});
            
 expo.click(function () {
                   var valeur_actuelle = affichage.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "+" || lettre_avant == "(" ||  lettre_avant == "0" || lettre_avant == "" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/" ) {
      
        var valeur = $(this).val();
        
            
        var valeur1 ="e";
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        if (affichage.val() == 0) {

            affichage.val(valeur);
            affichage1.val(valeur1 + "(");
        } else {

            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1 + "(");
        }
        nombre_de_parenthese = nombre_de_parenthese + 1;


        }
       
    });

        pi.click(function () {
            
            
                               var valeur_actuelle = affichage.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "+" || lettre_avant == "(" ||  lettre_avant == "0" || lettre_avant == "" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/" ) {
        
        var valeur = $(this).val();
      
        var valeur1 = $(this).html();
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
    
        if (valeur_actuelle==0){
            affichage.val(valeur);
            affichage1.val(valeur1);
            
        }
            else{

            affichage.val(valeur_actuelle+valeur);
            affichage1.val(valeur_actuelle1+valeur1);
      
        
            }

        }
       
});
  
       
  
    
    
    
    pp1.click(function () {
        

     var valeur_actuelle = affichage.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "+" || lettre_avant == "(" ||  lettre_avant == "0" || lettre_avant == "" || lettre_avant == "-" || lettre_avant == "*" || lettre_avant == "/" || lettre_avant=="n" || lettre_avant=="s" ) {
            
             var valeur = $(this).val();
        var valeur1 = $(this).html();
        var valeur_actuelle = affichage.val();
        var valeur_actuelle1 = affichage1.val();
        if (affichage.val() == 0) {

            affichage.val(valeur);
            affichage1.val(valeur1);
            nombre_de_parenthese = nombre_de_parenthese + 1;
        } else {

            affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1);
            nombre_de_parenthese = nombre_de_parenthese + 1;
        }
       
            
        }
            
        



    });
    
    
       pp2.click(function () {
           
           
     var valeur_actuelle = affichage.val();
                   var valeur_actuelle1 = affichage1.val();
        var taille = valeur_actuelle.length;
        var amar = valeur_actuelle;
        var lettre_avant = amar[taille - 1];

       
        if (lettre_avant == "(" || lettre_avant == "+" ||  lettre_avant == "-" || lettre_avant == "" || lettre_avant == "*" || lettre_avant == "/" || lettre_avant == "/") {}
            else{
           
           
          var valeur = $(this).val();
        var valeur1 = $(this).html();

           


           
affichage.val(valeur_actuelle + valeur);
            affichage1.val(valeur_actuelle1 + valeur1);
            nombre_de_parenthese = nombre_de_parenthese -1;
           

}

    });
    
    
    
    function f_controle() {
        if(deg_rad==0){
            rad.css({
                background: 'linear-gradient(#79D144 0%, #50A61F 100%'
            });
              deg.css({
                background: ''
            });
            
        }
        else {
            
             deg.css({
                background: 'linear-gradient(#79D144 0%, #50A61F 100%'
            });
              rad.css({
                background: ''
            });
        }
        
        
        
        if (nombre_de_parenthese == 0) {
            pp2.prop("disabled", 'true');
        } else {
            pp2.removeAttr("disabled");
        }

        if (nombre_de_parenthese > 0) {
            pp2.css({
                background: 'rgba(255, 0, 0, 0.9)'
            });

        } else {
            pp2.css({
                background: ''
            });
        }
            
        

        setTimeout(f_controle, 100); /* rappel après  chaque 100 millisecondes */
    }
    f_controle();
})


/*  point.prop("disabled", 'true');
            
            affichage.val(valeur_actuelle+valeur);
            
            var valeur_actuelle=affichage.val();
        var taille=valeur_actuelle.length;
        var amar=valeur_actuelle;
 var lettre_avant=amar[taille-1]  ;
    if (lettre_avant=="+" || lettre_avant=="-" || lettre_avant=="*" || lettre_avant=="/" ){
        
         point.prop("disabled", 'true');//désavtiver le bouton virgule une fois qu'on appuie pour éviter par exemple 25.2.5   

*/
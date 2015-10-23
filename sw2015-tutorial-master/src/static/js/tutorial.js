
/*
// ############
//    STEP 1
// ############
*/

// Loading the CSS
//jQuery(document).ready(function(e){
	//var bootstrapCSSLink = $('<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">');
	//var bootstrapThemeCSSLink = $('<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">');
	//var bootstrapJavaScriptLink = $('<script type="text/javascript" src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>');
	
	//$('body').append(bootstrapCSSLink);
	//$('body').append(bootstrapThemeCSSLink);
	//$('body').append(bootstrapJavaScriptLink);	
//});




/*
// ############
//    STEP 14
// ############
*/

//hd
var checkbox1 = false;
$("#checkboxalldiseases").change(function() {
    if(this.checked) {
		checkbox1 = true;
    }
	else{
		checkbox1 = false;
	}
});

var checkbox2 = false;
$("#infectiousdiseases").change(function() {
    if(this.checked) {
		checkbox2 = true;
    }
	else{
		checkbox2 = false;
	}
});

var checkbox3 = false;
$("#biologicalweapondiseases").change(function() {
    if(this.checked) {
		checkbox3 = true;
    }
	else{
		checkbox3 = false;
	}
});

var checkbox4 = false;
$("#neurologicaldisorders").change(function() {
    if(this.checked) {
		checkbox4 = true;	
    }
	else{
		checkbox4 = false;
	}
});

var checkbox5 = false;
$("#viraldiseases").change(function() {
    if(this.checked) {
		checkbox5 = true;
    }
	else{
		checkbox5 = false;
	}
});

var checkbox6 = false;
$("#rarediseases").change(function() {
    if(this.checked) {
		checkbox6 = true;
    }
	else{
		checkbox6 = false;
	}
});

var checkbox7 = false;
$("#low").change(function() {
    if(this.checked) {
		checkbox7 = true;

    }
	else{
		checkbox7 = false;
	}
});

var checkbox8 = false;
$("#medium").change(function() {
    if(this.checked) {
		checkbox8 = true;
    }
	else{
		checkbox8 = false;
	}
});

var checkbox9 = false;
$("#high").change(function() {
    if(this.checked) {
		checkbox9 = true;	
    }
	else{
		checkbox9 = false;
	}
});

var checkbox10 = false;
$("#inflammation").change(function() {
    if(this.checked) {
		checkbox10 = true;	
    }
	else{
		checkbox10 = false;
	}
});

var checkbox11 = false;
$("#acne").change(function() {
    if(this.checked) {
		checkbox11 = true;	
    }
	else{
		checkbox11 = false;
	}
});











$('#QUERYBUTTON').on('click', function(e){
	
	if (checkbox1 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Diseases}');
	}
	if (checkbox2 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:InfectiousDiseases}');
	}
	if (checkbox3 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:BiologicalWeaponDiseases}');
	}
	if (checkbox4 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:NeurologicalDisorders}');
	}
	if (checkbox5 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:ViralDiseases}');
	}
	if (checkbox6 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:RareDiseases}');
	}
	if (checkbox7 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesLowDeathrate}');
	}
	if (checkbox8 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesMediumDeathrate}');
	}
	if (checkbox9 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesHighDeathrate}');
	}
		if (checkbox10 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Inflammation.}');
	}
	
	//Viraldiseases and deathrate
	if (checkbox9 == true && checkbox5 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesHighDeathrate. ?disease a disease:ViralDiseases}');
	}
	
	if (checkbox8 == true && checkbox5 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesMediumDeathrate. ?disease a disease:ViralDiseases}');
	}
	
	if (checkbox7 == true && checkbox5 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesLowDeathrate. ?disease a disease:ViralDiseases}');
	}
	
		//Rarediseases and deathrate
	if (checkbox9 == true && checkbox6 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesHighDeathrate. ?disease a disease:RareDiseases}');
	}
	
	if (checkbox8 == true && checkbox6 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesMediumDeathrate. ?disease a disease:RareDiseases}');
	}
	
	if (checkbox7 == true && checkbox6 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesLowDeathrate. ?disease a disease:RareDiseases}');
	}
	
			//Infectiousdiseases and deathrate
	if (checkbox9 == true && checkbox2 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesHighDeathrate. ?disease a disease:InfectiousDiseases}');
	}
	
	if (checkbox8 == true && checkbox2 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesMediumDeathrate. ?disease a disease:InfectiousDiseases}');
	}
	
	if (checkbox7 == true && checkbox2 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesLowDeathrate. ?disease a disease:InfectiousDiseases}');
	}
	
				//Neurological disorders and deathrate
	if (checkbox9 == true && checkbox4 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesHighDeathrate. ?disease a disease:NeurologicalDisorders}');
	}
	
	if (checkbox8 == true && checkbox4 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesMediumDeathrate. ?disease a disease:NeurologicalDisorders}');
	}
	
	if (checkbox7 == true && checkbox4 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesLowDeathrate. ?disease a disease:NeurologicalDisorders}');
	}
	
					//BiologicalWeaponDiseases and deathrate
	if (checkbox9 == true && checkbox3 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesHighDeathrate. ?disease a disease:BiologicalWeaponDiseases}');
	}
	
	if (checkbox8 == true && checkbox3 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesMediumDeathrate. ?disease a disease:BiologicalWeaponDiseases}');
	}
	
	if (checkbox7 == true && checkbox3 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:DiseasesLowDeathrate. ?disease a disease:BiologicalWeaponDiseases}');
	}
	
	//inflammation and category
		if (checkbox10 == true && checkbox1 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Inflammation.}');
	}
		if (checkbox10 == true && checkbox2 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Inflammation. ?disease a disease:InfectiousDiseases}');
	}
		if (checkbox10 == true && checkbox3 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Inflammation. ?disease a disease:BiologicalWeaponDiseases}');
	}
			if (checkbox10 == true && checkbox4 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Inflammation. ?disease a disease:NeurologicalDisorders}');
	}
		if (checkbox10 == true && checkbox5 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Inflammation. ?disease a disease:ViralDiseases}');
	}
		if (checkbox10 == true && checkbox6 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Inflammation. ?disease a disease:RareDiseases}');
	}
	
	//acne and category
		if (checkbox11 == true && checkbox1 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Acneiform_eruptions.}');
	}
		if (checkbox11 == true && checkbox2 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Acneiform_eruptions. ?disease a disease:InfectiousDiseases}');
	}
		if (checkbox11 == true && checkbox3 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Acneiform_eruptions. ?disease a disease:BiologicalWeaponDiseases}');
	}
			if (checkbox11 == true && checkbox4 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Acneiform_eruptions. ?disease a disease:NeurologicalDisorders}');
	}
		if (checkbox11 == true && checkbox5 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Acneiform_eruptions. ?disease a disease:ViralDiseases}');
	}
		if (checkbox11 == true && checkbox6 == true){
		$('#QUERYBOX').html('prefix disease: &lt;http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#&gt; SELECT ?disease WHERE {?disease a disease:Acneiform_eruptions. ?disease a disease:RareDiseases}');
	}
	
	
	var query = $('#QUERYBOX').val();
	var endpoint = 'http://localhost:5820/Diseases/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		console.log(query);
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktargetall').html(ul);
		} catch(err) {
			$('#linktargetall').html('Something went wrong!');
		}
		

		
	});
	
});


$('#query1').on('click', function(e){
	
	var query = 'prefix disease: <http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#> SELECT ?disease WHERE { ?disease a disease:NeurologicalDisorders.?disease a disease:RareDiseases.?disease a disease:Pain. }'
	var endpoint = 'http://localhost:5820/Diseases/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		console.log(query);
		
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktargetall').html(ul);
		} catch(err) {
			$('#linktargetall').html('Something went wrong!');
		}
		

		
	});
	
});

$('#query2').on('click', function(e){
	
	var query = 'prefix disease: <http://www.semanticweb.org/jimi/ontologies/2015/9/Ontology1443989410323.owl#> SELECT ?disease WHERE { ?disease a disease:BiologicalWeaponDiseases.?disease a disease:ViralDiseases.?disease a disease:DiseasesHighDeathrate. }'
	var endpoint = 'http://localhost:5820/Diseases/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		console.log(query);
		
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktargetall').html(ul);
		} catch(err) {
			$('#linktargetall').html('Something went wrong!');
		}
		

		
	});
	
});

$('#linknoreasoning').on('click', function(e){
	
	var query = $('#querynoreasoning').val();
	var endpoint = 'http://localhost:5820/Disease/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		console.log(query);
		
		
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktargetall').html(ul);
		} catch(err) {
			$('#linktargetall').html('Something went wrong!');
		}
		

		
	});
	
});

$('#linkalldiseases').on('click', function(e){
	
	var query = $('#queryalldiseases').val();
	var endpoint = 'http://localhost:5820/Disease/query';
	var format = 'JSON';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);
		
		
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktargetall').html(ul);
		} catch(err) {
			$('#linktargetall').html('Something went wrong!');
		}
		

		
	});
	
});



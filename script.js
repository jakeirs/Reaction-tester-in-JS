			var start = new Date().getTime();
			
			function getRandomColor() {
				var letters = '0123456789ABCDEF';
				var color = '#';
				for (var i = 0; i < 6; i++ ) {
					color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
			}
			
					
			function makeShapeAppear() {
			
				var randomPixelsTop = Math.random() * 400
				
				var randomPixelsLeft = Math.random() * 500
				
				var randomWidth = Math.random() * 200 + 50
				
				if (Math.random() < 0.5 ) {
				
					document.getElementById("squareDiv").style.borderRadius = "50%";
									
				} else {
					document.getElementById("squareDiv").style.borderRadius = "0";
				}				 
				
				document.getElementById("squareDiv").style.backgroundColor = getRandomColor();
			
				document.getElementById("squareDiv").style.width =  randomWidth +"px";
				
				document.getElementById("squareDiv").style.height =  randomWidth +"px";
			 
				document.getElementById("squareDiv").style.top =  randomPixelsTop +"px";
				
				document.getElementById("squareDiv").style.left =  randomPixelsLeft +"px";
			
				document.getElementById("squareDiv").style.display = "block" ;
				
				start = new Date().getTime();
			
			}
			
			function appearAfterDelay() {
						
				setTimeout(makeShapeAppear, Math.random() * 2300);
			}
			
			appearAfterDelay();
		
			document.getElementById("squareDiv").onclick = function() {
			
				var end = new Date().getTime();
				
					timeTaken = (end - start) / 1000;
				
					document.getElementById("squareDiv").style.display = "none";
					
						document.getElementById("timeTaken").innerHTML = timeTaken + " s";
					
					appearAfterDelay();
						
			}

			addEventListener("click", function(event) {
				event.preventDefault();
			})
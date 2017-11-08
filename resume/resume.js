/*function showWish()
{*/
    var today = new Date();
    var time = today.getHours();
    var YVal,XVal,X;
    var wish;
    if(time < 12)
        wish = "GOOD MORNING !!!";
    else if(time >= 12 && time < 18)
        wish = "GOOD AFTERNOON !!!";
    else if(time >= 18)
        wish = "GOOD EVENING !!!";
    $(".parentDiv").append('<div class="wishesDiv">'+wish+'<div>');
    setTimeout(function()
    {
        $("body").css("background-color",'#fff');
        $('.resume_ball').show();
		var hoverEl = '<div class="hover"></div><div class="hovertxt">hover to view</div>';
        setTimeout(function()
        {
            /*for(var i=0; i<170; i++)
            {
                $('.resume_ball').css("transform","translate(0px,"+(i+102)+"px)");
                YVal = (i+102);
            }*/
			$('.resume_ball').animate({
										top : ""+($('.resume_ball').parent().height()/2) - 40
									},800)
            setTimeout(function()
            {
				$(".wishesDiv").addClass('transformClass');
                setTimeout(function()
                {
                    $('.resume_ball').animate({
										left: '57%',
										top: '+=10px'
									},800)
                    setTimeout(function()
                    {
							$('.resume_ball').animate({
									top : ""+$('.resume_ball').parent().height() - 30,
									left : '80%'
								},1000)
                        setTimeout(function()
                        {
                            $('.resume_ball').animate({ 
														'transform': 'none !important',
														'height': '100%',
														'width': '100%',
														'position': 'initial',
													    'top':'0px',
														'left':'0px',
														'borderRadius':'25%'
														},1000)
                            $(".wishesDiv").remove();
							setTimeout(function()
							{
								var htmlEle = '<div class="contentDiv bubbles"><div class="contents"><div class="section"><div class="acadCont"><div class="acadTitle">My Academics</div><div class="acadDetails"><div>-Bachelor of Information Technology, Karpagam college of engineering, Coimbatore (Secured 9 CGPA).</div>  <div>-Class 12th (Computer Science Stream with Mathematics)securing 92%.</div>  <div>- Class 10th securing 90%. </div></div></div></div></div></div>';
								$('.resume_ball').prepend(htmlEle);   
								
								var htmlEle = '<div class="parentEl"><div class="footerContact"><div class="name">Vennila Mahalingam : 7094054614 : vennilamahalingam.vm@gmail.com</div></div></div>';
								$(htmlEle).insertAfter('.parentDiv');
								$('.contentDiv').animate(
								{
									bottom:'35%',
									width:'250px',
									height:'325px',
									left: '0px'
								},3000,
								function(){$('.contentDiv').addClass('opacity');$('.acadCont').prepend(hoverEl);})
								
									$('.contentDiv').hover(function()
									{
										$('.contentDiv').removeClass('opacity');
										$('.contentDiv').css('z-index','9');
										$('.acadCont .hover,.acadCont .hovertxt').hide();
									},
									function()
									{
										$('.contentDiv').addClass('opacity');
										$('.contentDiv').css('z-index','0');
										$('.acadCont .hover,.acadCont .hovertxt').show();
									});
								setTimeout(function()
								{
									$(".acadCont").delay(1000).fadeIn();
									
									setTimeout(function()
									{
										var htmlEle = '<div class="contentDiv1 bubbles"><div class="contents"><div class="section"><div class="officeCont"><div class="officeTitle">Current job</div><div class="officeDetails"><div>-Working at skava systems, an Infosys company</div>  <div>-since june 2015</div>  <div>- As a software engineer.</div></div></div></div></div></div>';
										$('.resume_ball').prepend(htmlEle);   
										$('.contentDiv1').animate(
										{
											bottom:'25%',    
											width: '200px',
											height: '250px',
											left: '20%'
										},3000,function(){$('.contentDiv1').addClass('opacity');
										$('.officeCont').prepend(hoverEl);})
										
										$('.contentDiv1').hover(function()
										{
											$('.contentDiv1').removeClass('opacity');
											$('.contentDiv1').css('z-index','9');
			
										$('.officeCont .hover,.officeCont .hovertxt').hide();
										},
										function()
										{
											$('.contentDiv1').addClass('opacity');
											$('.contentDiv1').css('z-index','0');
											
										$('.officeCont .hover,.officeCont .hovertxt').show();
											});
										setTimeout(function()
										{
											$(".officeCont").delay(1000).fadeIn();
											
											setTimeout(function()
											{
												var htmlEle = '<div class="contentDiv2 bubbles"><div class="contents"><div class="section"><div class="yMeCont"><div class="yMe">Why me:</div> <div class="yMeList"><div>- I have good communication skills (verbal and written)</div> <div>-Quick and self learner</div> <div>-Ability to work with pressure situations.</div> <div>-Always up to face challenges</div></div></div></div></div></div>';
												$('.resume_ball').prepend(htmlEle);   
												$('.contentDiv2').animate(
												{
													bottom:'10%',    
													width:'250px',
													height:'325px',
													left: '40%'
												},3000,function(){$('.contentDiv2').addClass('opacity');$('.yMeCont').prepend(hoverEl)})
												
												$('.contentDiv2').hover(function()
												{
													$('.contentDiv2').removeClass('opacity');
													$('.contentDiv2').css('z-index','9');
													
										$('.yMeCont .hover,.yMeCont .hovertxt').hide();
												},
												function()
												{
													$('.contentDiv2').addClass('opacity');
													$('.contentDiv2').css('z-index','0');
													
										$('.yMeCont .hover,.yMeCont .hovertxt').show();
												});
												setTimeout(function()
												{
													$(".yMeCont").delay(1000).fadeIn();
													
													setTimeout(function()
													{
														var htmlEle = '<div class="contentDiv3 bubbles"><div class="contents"><div class="section"><div class="respCont"><div class="respTitle">My Current Responsibilities</div><div class="respList"><div>-Analyzing the business requirements and functional specifications to provide the estimate.</div><div>-Allocating the resources for the modules of the project to be worked on.</div><div>-Providing guidance to my team(2 members) based on the interaction with client on calls.</div><div>-Working on project making sure the pages are designed as per the comp provided by the client.</div><div>-Reviewing the code of team resources for optimization.</div><div>-Delivering and implementing the projects on scheduled time.</div><div>-Interacting with client on further changes/ mainteinance via mail/calls.</div></div></div></div></div></div>';
														$('.resume_ball').prepend(htmlEle);   
														$('.contentDiv3').animate(
														{
															bottom:'10%',    
															width:'400px',
															height:'510px',
															left: ''+$('.contentDiv3').parent().width() - 400
														},3000,function(){$('.contentDiv3').addClass('opacity');$('.respCont').prepend(hoverEl)})
																			
														$('.contentDiv3').hover(function()
														{
															$('.contentDiv3').removeClass('opacity');
															$('.contentDiv3').css('z-index','9');
															
										$('.respCont .hover,.respCont .hovertxt').hide();
														},
														function()
														{
															$('.contentDiv3').addClass('opacity');
															$('.contentDiv3').css('z-index','0');
															
										$('.respCont .hover,.respCont .hovertxt').show();
														});
														setTimeout(function()
														{
															$(".respCont").delay(1000).fadeIn();
															setTimeout(function()
															{
																var htmlEle = '<div class="contentDiv4"><div class="triangle"></div><div class="contents">click here to view my key projects</div></div>';
																$('.resume_ball').prepend(htmlEle);
																$('.contentDiv4').animate(
																{
																	top:'20px',
																	width:'200px',
																	height: '70px',
																	left: ''+($('.contentDiv4').parent().width()/2) - 100
																},3000)
																//registerClick();
																$('.contentDiv4').off('click').on('click',function(){
																	$('.contentDiv4').animate({
																		width: '100%',
																		left: '0px',
																		height:'100%',
																		top: '0px',
																		color: '#f7f1f1'
																	},3000)
																	$('.bubbles,.triangle,.contents').remove();
																	setTimeout(function()
																	{
																		$(".contentDiv4").unbind();
																		var htmlEl = '<div class="projectDiv boxes"></div><div class= "projectSubDiv"></div>';
																		jQuery('.contentDiv4').append(htmlEl)
																		$('.projectDiv').animate(
																		{
																			'top':'50%',
																			'left': '50%'
																		},3000)
																		setTimeout(function(){
																			var htmlEl = '<div class="topic">Store Locator</div><div class="cont">This module enables user to Look up the stores near by using google location detecting and set the same as their own store. It is done for both mobile and tablet user experience.</div><div class="topic">Express Checkout:</div><div class="cont">This section is from adding the product to cart untill getting the order confirmed including payment section. It differs from full checkout in that this provides shipping address, billing, payments, promo, gift card sections in single page which was rather challenging.</div><div class="topic">Full checkout</div><div class="cont">This is the four step process of getting the product checked out and confirming the order. This was done for two regions.</div><div class="topic">TRU Next:</div><div class="cont">Creating widgets using FTL and JavaScript. Used Skava Studio Tool to upload the widgets and enabling server side rendering</div>'
																			var htmlEl1 = "<div class='techused'><div class='topic'>Technologies used</div><div class='cont'>Apache ant, HTML, JavaScript, jQuery, Angular Js, CSS3, SASS, Handlebars, FTL, Backbone.js,JSON, XML.</div></div>"
																			jQuery('.projectSubDiv').append(htmlEl1);
																			setTimeout(function(){
																				
																				jQuery('.projectSubDiv').append(htmlEl);
																				$('.projectSubDiv').append(jQuery('.footerContact').clone())
																			},3000)
																		},3000)
																	},3000)
																})
															},3000)
														},1000)
													},3000)
												},1000)
											},3000)
										},1000)
									},3000);
								},1000);
							},3000);
                        },1000);
                    },1000);
                },1000)
            },1000);
        }, 1000);
    },1000);
/*}*/
/*$(document).on('ready',function(
{
   showWish(); 
});
*/
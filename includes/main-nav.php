 <div class="gibac-breadcrumb hidden-xs">
          <a href="">Business Pages Malawi</a><a href="">Think.Innovative</a>
      </div>
      <div class="navbar" id="gibac-navbar">
		<a href="#" class="s-primary-hue-5">Home</a>
		<a href="#" class="s-primary-hue-5">News</a>
		<a href="#" class="s-primary-hue-5">Services</a>
		<a href="#" class="s-primary-hue-5">Clients</a>
		<a href="#" class="s-primary-hue-5">Contact</a>
      </div>
<div class="col-xs-12">
	<div id="mySidepanel" class="sidepanel">
		<a href="javascript:void(0)" class="close-button" onclick="closeNav()">×</a>
		<a href="#" class="s-primary-hue-5">Home</a>
		<a href="#" class="s-primary-hue-5">News</a>
		<a href="#" class="s-primary-hue-5">Services</a>
		<a href="#" class="s-primary-hue-5">Clients</a>
		<a href="#" class="s-primary-hue-5">Contact</a>
	</div>
	<!-- <button class="openbtn" onclick="openNav()">☰ Toggle Sidepanel</button>  -->
</div>

<style>
.sidepanel  {
  width: 0;
  display: inline-block;
  position: fixed;
  z-index: 9999999;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidepanel a:hover {
  color: #f1f1f1;
}

.sidepanel .close-button {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}

.openbtn {
	position: fixed;
	font-size: 20px;
	cursor: pointer;
	background-color: skyblue;
	width: auto;
	color: white;
	top: 10px;
	height: 50px;
	display: inline-block;
	padding: 10px 15px;
	border: none;
}

.openbtn:hover {
	background-color:#444;
}
</style>
<script>
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
</script>
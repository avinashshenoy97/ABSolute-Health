<!DOCTYPE html>
<html>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<head>
		<link rel = "stylesheet" type = "text/css" href = "home.css">
		<style>
			#det {
				text-align: center;
			}
		</style>
	</head>
	<body>
		<div id="header">
			<table>
				<tr>
					<td class="navmenu"> 
						<a href="home.html"><img src="Logos/logoAT.png" style="height:15%; width:auto; display: block;"/></a>
					</td>
					<td class="navmenu">
						<a href="Images/constr.jpg"> Fitness Evaluation	</a>
					</td>
					<td class="navmenu">
						<a href="Images/constr.jpg"> Nutrition </a>
					</td>
					<td class="navmenu">
						<a href="Images/constr.jpg"> Fitness </a>
					</td>
					<td class="navmenu">
						<a href="Images/constr.jpg"> Health Care </a>
					</td>
					<td class="navmenu">
						<a href="Images/constr.jpg"> Music </a>
					</td>
					<td class="navmenu">
						<a href = "about.html"> About Us </a>
					</td>
				</tr>
			</table>
		</div>
		<div id="det">
		<?php
			$servername = "localhost";
			$username = "root";
			$password = "hello";
			$dbname = "wt";

			$conn = new mysqli($servername, $username, $password, $dbname);

			if($conn->connect_error) {
				die("Connection failed : ".$conn->connect_error);
			}

			extract($_POST);

			$sql = "SELECT * FROM data";
			$result = $conn->query($sql);

			$found = false;

			while($row = $result->fetch_assoc()) {
				if($row["user"] == $uname) {
					$found = true;
					break;
				}
			}

			if($found) {
				echo "<h1>Username already exists!</h1>" ;
			}
			else {
				$sql = "INSERT INTO data (user, pass, weight) VALUES(".$uname.", ".$pwd.", ".$weight.")" ;
				$conn->query($sql);

				echo "<h1>Welcome ".$row["user"]."!</h1>" ;
				echo "<h2>Your current weight is ".$weight."</h2>";
			}


		?>
		</div>
	</body>
</html>
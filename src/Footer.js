import React from "react";
import "./Footer.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";

function Footer() {
	return (
		<div className="footer">
			<div className="footer_left">
				<img
          className="footer_albumlogo"
					src="https://images-workbench.99static.com/peapeGEz7YMGj2ErkDb0_BWvAAE=/http://s3.amazonaws.com/projects-files/80/8049/804974/14222ec3-f9ad-467d-8ea8-c40c6be0ac0d.jpg"
					alt=""
				/>
				<div className="footer_songInfo">
					<h4>yeah</h4>
					<p>usher</p>
				</div>
			</div>
			<div className="footer_center">
				<ShuffleIcon className="footer_green" />
				<SkipPreviousIcon className="footer_icon" />
				<PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
				<SkipNextIcon className="footer_icon" />
				<RepeatIcon className="footer_green" />
			</div>
			<div className="footer_right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;

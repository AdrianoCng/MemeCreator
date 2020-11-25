import React, {useState} from 'react';
import {Modal, Alert, Button} from 'react-bootstrap';
import facebookLogo from '../../img/facebook.png';
import twitterLogo from '../../img/twitter.png';
import redditLogo from '../../img/reddit.png';
import linkedinLogo from '../../img/linkedin.png';
import copyLinkLogo from '../../img/copy-link.png';

const PreviewModal = ({meme, response, showModal, setShowModal}) => {
	const {data} = response;

	const copyLink = () => {
		const urlMeme = document.querySelector("#url-generated-meme");
		urlMeme.select();

		try {
			const successful = document.execCommand("copy");
			const msg = successful ? "successful" : "unsuccessful";
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Modal show={showModal} centered onHide={() => setShowModal(false)}>
			<Modal.Body>
				{data.success
					?
					<img src={data.data.url} alt="meme" className="nm-canvas"/>
					:
					<Alert variant="danger">
						Please fill the boxes.
					</Alert>
				}
			</Modal.Body>
			<Modal.Footer>
				{data.success && 
					<div>
						<div id="share-buttons">
							<span className="mr-2 text-muted">Share</span>
							<a href={`http://www.facebook.com/sharer.php?u=${data.data.url}`} target="_blank">
								<img src={facebookLogo} alt="Facebook" />
							</a>
							<a href={`https://twitter.com/share?url=${data.data.url}`} target="_blank">
								<img src={twitterLogo} alt="Twitter" />
							</a>
							<a href={`http://reddit.com/submit?url=${data.data.url}`} target="_blank">
								<img src={redditLogo} alt="Reddit" />
							</a>
							<a href={`http://www.linkedin.com/shareArticle?mini=true&url=${data.data.url}`} target="_blank">
								<img src={linkedinLogo} alt="LinkedIn" />
							</a>
							<button className="ml-2 btn btn-sm" onClick={copyLink}>
								Copy link
								<img src={copyLinkLogo} alt="CopyLink" />
							</button>
						</div>
						<input type="text" id="url-generated-meme" readOnly value={data.data.url}/>
					</div>}
			</Modal.Footer>
		</Modal>
	)
};

export default PreviewModal;
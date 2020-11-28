import React from 'react';
import {Modal, Alert} from 'react-bootstrap';
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
			document.execCommand("copy");
		} catch (err) {
			alert("Copy not supported");
		}
	}

	return (
		<Modal show={showModal} centered backdrop="static" onHide={() => setShowModal(false)}>
			<Modal.Header closeButton>
				<h3 className="lead">{meme.name}</h3></Modal.Header>
			<Modal.Body>
				{data.success
					?
					<img src={data.data.url} alt="meme" className="nm-canvas"/>
					:
					<Alert variant="danger">
						Please provide some text for the meme.
					</Alert>
				}
			</Modal.Body>
			<Modal.Footer className="justify-content-center">
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
							<button className="btn btn-sm" onClick={copyLink}>
								Copy link
								<img src={copyLinkLogo} alt="CopyLink" />
							</button>
						</div>
						<div className="d-flex justify-content-center">
							<input type="text" id="url-generated-meme" readOnly value={data.data.url}/>
						</div>
					</div>}
			</Modal.Footer>
		</Modal>
	)
};

export default PreviewModal;
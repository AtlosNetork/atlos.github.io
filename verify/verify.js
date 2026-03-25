const messageCard = document.getElementById("verification-message");
const messageTitle = document.getElementById("message-title");
const messageBody = document.getElementById("message-body");
const verificationCard = document.getElementById("verification-card");

const fields = {
  fullName: document.getElementById("credential-name"),
  credentialTitle: document.getElementById("credential-title"),
  id: document.getElementById("credential-id"),
  issueDate: document.getElementById("credential-issue-date"),
  status: document.getElementById("credential-status"),
  statusBadge: document.getElementById("credential-status-badge"),
  description: document.getElementById("credential-description"),
};

function showMessage(title, body) {
  verificationCard.hidden = true;
  messageCard.hidden = false;
  messageTitle.textContent = title;
  messageBody.textContent = body;
}

function showCredential(credential) {
  fields.fullName.textContent = credential.fullName;
  fields.credentialTitle.textContent = credential.credentialTitle;
  fields.id.textContent = credential.id;
  fields.issueDate.textContent = credential.issueDate;
  fields.status.textContent = credential.status;
  fields.statusBadge.textContent = credential.status;
  fields.description.textContent = credential.description;

  messageCard.hidden = true;
  verificationCard.hidden = false;
}

async function loadCredential() {
  const params = new URLSearchParams(window.location.search);
  const credentialId = params.get("id");

  if (!credentialId) {
    return;
  }

  try {
    const response = await fetch("./credentials.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Credential data could not be loaded.");
    }

    const credentials = await response.json();
    const credential = credentials.find((record) => record.id === credentialId);

    if (!credential) {
      showMessage(
        "Credential not found",
        "The requested credential could not be verified. Please confirm the credential ID or contact Atlos support if you believe this is an error."
      );
      return;
    }

    showCredential(credential);
  } catch (error) {
    showMessage(
      "Verification unavailable",
      "Atlos could not load the credential record at this time. Please try again shortly."
    );
  }
}

loadCredential();

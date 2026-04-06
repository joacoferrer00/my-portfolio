"""
config_template.py
------------------
Copy this file to config.py and populate the environment variables.
Never commit config.py — it is in .gitignore.

In Microsoft Fabric, set these values as:
  - Notebook environment parameters (workspace-level secrets), or
  - Azure Key Vault references linked to your Fabric workspace.

All values are read from environment variables. No secrets appear in code.
"""

import os

# ── Fabric / Delta Table ─────────────────────────────────────────────────────

# Name of the Delta table produced by the Dataflow Gen2
TABLE_NAME = os.environ.get("NPS_TABLE_NAME", "cx_nps_rolling_5w")

# Lakehouse path where CSV files are staged before upload
LOCAL_FOLDER = os.environ.get("LOCAL_EXPORT_FOLDER", "/lakehouse/default/Files/dumps")


# ── Azure Active Directory App Registration ──────────────────────────────────
# Portal path: Azure Active Directory → App Registrations → your app → Overview

# Directory (tenant) ID
TENANT_ID = os.environ["AAD_TENANT_ID"]

# Application (client) ID
CLIENT_ID = os.environ["AAD_CLIENT_ID"]

# Client secret value (Certificates & Secrets → Client secrets)
CLIENT_SECRET = os.environ["AAD_CLIENT_SECRET"]


# ── SharePoint / Microsoft Graph ─────────────────────────────────────────────

# Site path used to resolve the site in Graph API
# Format: yourtenant.sharepoint.com:/sites/your-site-name
SPO_SITE_PATH = os.environ["SPO_SITE_PATH"]

# Folder path within the SharePoint drive where files are uploaded
SPO_FOLDER_PATH = os.environ["SPO_FOLDER_PATH"]

# Graph API site ID — retrieve via:
#   GET https://graph.microsoft.com/v1.0/sites/{SPO_SITE_PATH}
SITE_ID = os.environ["SPO_SITE_ID"]

# Graph API drive ID — retrieve via:
#   GET https://graph.microsoft.com/v1.0/sites/{SITE_ID}/drives
DRIVE_ID = os.environ["SPO_DRIVE_ID"]

# SynchroCivics - Synchro Civics sample app

This app is intended to be installed into a [Synchro Server](https://synchro.io) environment using the [Synchro Command Line Interface](https://www.npmjs.com/package/synchro) tool.  

Synchro Civics uses the [Google Civic Information API](https://developers.google.com/civic-information/) to power a Synchro mobile app that shows the representatives at every level of government based on street address.

## Installing Synchro Civics

To install in your Synchro Server environment using the Synchro CLI:
```
$ synchro install https://github.com/SynchroLabs/SynchroCivics/archive/master.zip
```

Alternatively, you may use Git to install this app and keep it up to date.  To do that, you will want to clone SynchroCivics (this repo) into the `synchro-apps` directory in your Synchro installation, then install Synchro Civics into your configuration using the Synchro CLI:

```
$ synchro add SynchroCivics synchro-civics
```

## Configuring Synchro Civics

Before running Synchro Server with this app, you must provide the app configuration setting `GOOGLE_CIVICS_KEY`.  This value must represent a [Google API key](https://support.google.com/cloud/answer/6158862) that has been [enabled for use with the Civic API](https://developers.google.com/civic-information/docs/using_api).

The easiest way to set this value is to add it to the Synchro Server `config.json` file after installing the Synchro Civics app into your local configuration (as described in the previous section):

```
{
  "APPS": {
    ... other apps ...
    "civics": {
      "container": "civics",
      "GOOGLE_CIVICS_KEY": ">>>PUT YOUR KEY HERE<<<"
    }
  }
}
```

## Updating Synchro Civics

If you installed this app using `synchro install`, then you may update it (getting the most recent version) at any time by doing:

```
$ synchro install -u synchro-civics
```

Of course if you installed by cloning the repo, then you will use Git to update as appropriate.

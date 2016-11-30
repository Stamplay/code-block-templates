# Code Block Templates

Here you will find the entire list of templates that you can use from `Stamplay Editor`.

## Templates

Code Block templates are available from the [Stamplay Editor](https://editor.stamplay.com).

### How to create a template

If you have a Code Block to share, you can create a _Pull Request_ and add your template. The team will review it and once it is aproved the template will be available through `Stamplay Editor`.

#### Fields

**`name`**

The name of the template. It will appear on the templates section.

**`type`**

This is the type of the example. It can be `sample` or `webhook`. Currently not in use.

**`description`**

The description of the template it will appear on the list of templates.

**`author`**

Indicates who writes the template.

- `name`: The name of the author
- `link`: A link to GitHub or Twitter

```yaml
author: 
  name: johndoe
  link: https://github.com/johndoe
```

**`sampleRequest`**

Sample request gives you the posibility to have a sample request by default for testing the Code Block.

- `method`: The HTTP method. Example: GET, POST, etc.
- `type`: The type of the request. It can be: `json`.
- `mode`: The mode of the runner. It can be: `body`, `parameters`.
- `data`: The default data for the request.

```yaml
sampleRequest: 
  method: 'POST'
  type: 'json'
  mode: 'body'
  data: |
    {
      "token":"REPLACE_WITH_SLACK_TOKEN",
      "team_id":"T0001",
      "team_domain":"example",
      "channel_id":"C2147483705",
      "channel_name":"test",
      "timestamp":"1355517523.000005",
      "user_id":"U2147483697",
      "user_name":"jdoe",
      "text":"googlebot: What is the air-speed?",
      "trigger_word": "googlebot:"
    }
```

**`settings`**

- `parse`: Indicates if the body should be parsed.
- `merge`: Indicates if the body should be merged.

```yaml
settings:
  parse: true
  merge: true
```

**`secrets`**

This is the list of secrets that your template requires for working, basically a key/value pair.

```yaml
secrets: 
  WEBHOOK_SECRET: 'REPLACE_WITH_SLACK_TOKEN'
```

**`note`**

Here you can put some instructions about how to use the template or explain what it does. A note, contains the following fields:

- `title`: The title of the note. It will appear on the details section
- `content`: The content of the note. It supports markdown.

```yaml
note:
  title: Description
  content: |
    With full control function signature since we have the raw request we can afford to parse the multipart/form-data content type. To do so we need to disable the Parse body property that can be found in the Properties tab.
```

**`code`**

The actual code for the Code Block. It supports `es6`.

```yaml
code:

  es6: |
    module.exports = (context, req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html '});
      res.end('<h1>Hello, world!</h1>');
    }
```

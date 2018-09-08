# Daily SMS

[Live](https://dailysms.netlify.com/)

Schedule SMS messages using a Redis job queue, background cron job workers, and a REST API.

![dashboard](https://github.com/pxr13/daily-sms/blob/master/client/public/daily_sms.gif)


## Stack

  * Python
  * Flask
  * Redis
  * React
  * Postgres


## Features
  * Schedule SMS messages for any time of day
  * Phone verification during onboarding to ensure security
  
  
## Code Sample

### Queueing Jobs

I used Redis Queue for queueing jobs and APScheduler for cron jobs. I chose these tools because of the flexibility and robustness they each provide. 

Once a user schedules an SMS message in the web dashboard, the client hits a REST API that calls a clock process. The clock process implementation is below. 

It contains two functions: 1) ```add_job``` and 2) ```send_sms```  . This separates the responsibilities between creating jobs and putting them on our queue so they can be scaled and updated independently.

```python
q = Queue(connection=conn)

twilio = TwilioService()


def send_sms(*args):
    q.enqueue(twilio.send_sms, *args)


def add_job(*args):
    job_params = format_job_params(*args)
    message, to_number = args

    try:
        scheduler.add_job(str(message.id), send_sms, **job_params)
    except Exception as e:
        raise AddJobError(f'Unable to add job with message id: {message.id}')
```

### Checkbox UI

As seen in the gif above, users are given a checkbox to decide when to send their SMS. I wanted to make sure that when one box was checked, all other boxes would become unchecked.

If the values are in an array, we could simply map over them and set checkboxes to be checked or unchecked depending on which one the user checked last. However, our values were stored in an object for simpler rendering in the component so it was a bit trickier.

For example, assuming "Every day" was originally checked but now "Weekdays" is checked, the following code transforms this:

```javascript

days: {
  'Every day': true,
  Weekdays: false,
  Weekends: false
}

```

Into this:

```javascript

days: {
  'Every day': false,
  Weekdays: true,
  Weekends: false
}

```

Let's see.

```javascript
handleChange = (e) => {
  const DAYS = ['Every day', 'Weekdays', 'Weekends']
  
  const { name } = event.target;

  const updatedDays = DAYS.reduce(updateDays(name), {});

  this.setState({ days: { ...updatedDays } });

  this.handleCloseCheckbox();
}

...

const updateDays = (name) => (acc, curr) =>
  curr === name ? { ...acc, [curr]: true } : { ...acc, [curr]: false };
```

Now the correct box is checked!

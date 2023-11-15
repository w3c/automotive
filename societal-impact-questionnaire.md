<https://w3ctag.github.io/societal-impact-questionnaire/>

1.  2. Questions to consider

When answering the questions in this document, we encourage you to
discuss the data or feedback you are collecting about the impact of your
technologies, and how you can use this to improve benefits to users or
mitigate harms caused. Consider what you would measure in order to
evaluate the impact your technology is having, and what you would change
if the results were not desirable. If you already have processes for
measuring impact, summarise these here as well. Note that not everything
can (or should) be quantified, and that data collection itself can have
a negative societal impact; ensure that in measuring your impact, you
are not putting people at risk.

Example: if a local government decides to add separated bicycle lanes
and signalling then they should expect fewer bicycle accidents and more
use of bicycles. They can measure that by collecting automated
non-identified traffic data and by monitoring published statistics about
bicycle accidents.

1.  2.1 What kinds of activities do you anticipate your specification
    becoming a critical part of?

**Answer:**

This specification enables clients to access vehicle data. Clients can
be deployed in-vehicle, in vehicle proximity, or remote to the vehicle
(cloud deployment). It is not likely that this access to vehicle data
will be available to the general public, but restricted to owners of the
vehicle, the vehicle manufacturer, or specific commercial actors under
contract with the vehicle owner, e. g. fleet managers.

Think about the use cases of stakeholders currently engaged in work on
the specification, as well as potential implementors in the future. Is
this something that may be used by citizens as part of their
interactions with governments? Will it be used in workplaces or schools?
Is it more applicable to a niche community? Is it something that a
person might run on a device they carry with them (like a mobile phone
or e-reader) or something that runs on a device in the home (like an
internet-enabled fridge)?

In this context, if access to the features in your specification become
unavailable, what problems might this cause to end users? What
mitigations do you have in place?

2.  2.2 What kinds of activities could your specification become a part
    of that you are not designing for?

**Answer:**

???

Are there other use cases that can be met by your feature(s) that were
not part of your original plans? People who use, build and author on the
web platform can be very creative and use features in unexpected ways.
Think beyond the problems you set out to solve with your specification.
How might they be useful in other problem spaces or ecosystems? Are
there any other groups you could reach out to to discuss this potential
further?

3.  2.3 What risks do you see in features of your specification being
    misused, or used differently from how you intended?

**Answer:**

If bad actors are successful in accessing the vehicle data then it can
be used to track people\'s activities without their knowledge or
consent. If they are successful in writing data to the vehicle, vehicle
safety could be corrupted.

This is mitigated by the mandatory secure protocols that are supported,
the access control that can be applied to sensitive data, as well as the
user consent. In addition it is expected that the vehicle manufacturers
will not enable public access to the vehicle origins, but keep it
sandboxed.

Think about worst case scenarios. Bad actors may try to trick people,
try to inject malware, steal information, track people\'s activities
without their knowledge or consent, leak information across origin
boundaries, game people\'s consent, surveil people. If one or more of
the parties involved in an implementation of your feature(s) are bad
actors, who can they exploit and how? Explain any mitigations you have
in place in your specification, and in the wider ecosystem.

Next think about possible use cases that may be completely different
from the problems you set out to solve when designing your feature(s).
How does the threat model change? What unexpected consequences could
arise?

4.  2.4 Can users of the Web Platform choose not to use features of your
    specification?

**Answer:**

The owner of the vehicle data is in most cases the owner of the vehicle.
The owner is expected to be the consent end point and is also expected
to take part in the application of access control to the vehicle data.

A client trying to access the vehicle data cannot opt-out of the applied
consent and access control decisions by the vehicle owner. Side channel
attacks are possible, but out of scope for this specification.

What does your specification do from an end-user perspective? What
happens if the end-user doesn\'t want that? How easy is it for someone
to opt out of these features? What might they lose? Are end-users able
to give meaningful consent to using these features? In what ways can
people be coerced into using these features, for example by a malicious
party; through the use of manipulative design features; through strong
social or cultural expectations, etc?

5.  2.5 What groups of people are excluded from using features of your
    specification?

**Answer:**

As mentioned earlier, access to the vehicle data is controlled through
access control and consent by the vehicle owner, and likely also through
network restrictions by the vehicle manufacturer.

The specification does not exclude any groups of users.

What steps have you taken as part of the specification to ensure the
features are available to as many people as possible? What additional
steps have you taken / are being taken / will need to be taken in the
wider ecosystem to improve access and inclusivity of these features?

If certain groups are deliberately excluded from using these features,
explain why.

6.  2.6 What effect may features of your specification have on minority
    groups?

**Answer:**

It is likely that if this specification gets wide adoption by vehicle
manufacturers it will increase the likelihood that access to vehicle
data will become available to larger groups than it is today when each
vehicle manufacturer implements proprietary communication solutions,
thus effectively sandboxing the vehicle data access to much smaller
groups.

Minority (underrepresented) or historically disadvantaged groups may be
different depending on culture, location, or other context. Think about
parts of society who may have trouble getting their voice heard, or
their needs taken seriously; who have faced prejudice and discrimination
in the past, or still do so today.

In what ways might technology built around the feature(s) of your
specification impact groups with these characteristics? Are there any
specific groups who would be particularly impacted? Are there divides in
society which may be widened (or closed)?

Think also about the broader ecosystem in which your feature(s) will be
deployed. What is in place to mitigate negative effects?

7.  2.7 What are the power dynamics at play in implementations of your
    specification?

**Answer:**

It is likely that over time this specification may affect the balance
between vehicle manufacturers and vehicle owners in terms of who
controls access to the vehicle data, pushing it towards the vehicle
owners. This should reduce the concentration of power.

As a result of these features, explain which parties are granted
additional power, and which have power removed, and to what extent. In a
worst case scenario, what power imbalances are exacerbated as a result
of implementations of your specification? Parties to consider include
the User Agent, device and software vendors, site authors, users of the
Web Platform, intermediaries.

Where is power concentrated in the ecosystem of which your specification
is a part, and do features of your specification increase or reduce that
concentration of power?

What structural inequalities may be reinforced by the ecosystem your
specification is part of, and which may be reduced?

8.  2.8 What points of centralization does your feature bring to the web
    platform?

**Answer:**

This specification strengthens the vehicle owners role in controlling
the flows of information, thus reducing the concentration of power.

Do features of your specification introduce any ways of restricting or
controlling flows of information? Does it make use of any existing
gatekeepers on the web, and does it bring any new ones? If so, what are
the benefits and disadvantages?

9.  2.9 To what extent do the features in your specification impact the
    natural environment?

**Answer:**

Vehicle data can be used for optimizing route distances, avoiding
congestion, predicting vehicle health, and more that can have a positive
impact on the natural environment.

Think broadly about how computing technologies may result in carbon
emissions or electronic waste, and the effect that implementations of
your features may have. Measuring the carbon footprint of a particular
technology can be challenging; what are the main things you would need
to highlight if an expert was going to attempt to do so?

What steps have you taken to increase efficiency, or decrease processing
requirements of the devices which will run implementations of your
specification? If applicable, how are you reducing data storage needs on
clientside devices?

Does your specification add features that will encourage or necessitate
web users to update their devices (either software or hardware) to use
them?

Consider also the wider ecosystem which your specification is intended
to be part of. Is there anything you can do to mandate or encourage
environmentally sustainable practices within this ecosystem, from the
perspective of your specification?

Do features of your specification enable or facilitate interactions
which would have a positive impact on the environment compared with how
similar things are achieved without these features?

10. 2.10 What is the expected lifetime of your specification feature(s)?

**Answer:**

Standard cars have an expected lifetime of 12 years, which may set the
scale for the expected lifetime of features in this specification.
??What can we say about deprecation, replacement or improvement???

Once something is added to the web platform it is very difficult to
remove it.

Are the features in your specification expected to remain stable and
relevant for months, years, or decades? What circumstances would result
in a need to deprecate these features? Do you have a strategy for
deprecation, replacement or improvement? Remember that you may not have
control over deprecating or removing a feature.

11. 2.11 Have you completed the [Security & Privacy Self-review
    Questionnaire](https://www.w3.org/TR/security-privacy-questionnaire/)?

**Answer:**

Yes.

---
title: &title "Omregn aktivitet, sport og motion til skridt [Beregner] 🚴‍♀️ ⇒ 🚶‍♀️"
permalink: /omregn-motion-aktivitet-sport-til-skridt/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1453342664588-b702c83fc822?ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80
  teaser: https://images.unsplash.com/photo-1453342664588-b702c83fc822?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Beregner
tags:
  - skridt
  - motion
  - beregner
last_modified_at: 2020-10-13T23:14:14Z
toc: true
---

Hvis du gerne vil have svar på hvor mange skridt 10 km cykling svarer til - eller hvor mange skridt du kan skrive i regnskabet for anden motion, sport og aktivitet, så tjek denne beregner.

Omregningen af aktivitet, motion og sport til skridt er baseret på MET, så det er kun en tilnærmelse, men hvis du hovedsageligt holder øje med dine skridt, så kan det være en hjælp. Du kan læse mere om at [omregne motion, sport og aktivitet til skridt](https://www.verywellfit.com/pedometer-step-equivalents-for-exercises-and-activities-3435742).

## Omregn aktivitet, motion og sport til skridt

{% include calculate-activity-to-steps.html %}

Omregn den motion du ikke kan tælle med din skridttæller til skridt i denne omregner.

## Omregningsfaktor fra motion til skridt

Beregneren bruger [omregningsfaktoreren fra aktivitet til skridt herfra](https://globalchallenge.zendesk.com/hc/en-gb/articles/360000440186-What-activities-can-be-converted-).

{% assign met_values = site.data.step-conversion %}
| Aktivitet | Skridt |
|-|-|
{% for row in met_values offset:2 -%}
| {{ row.Activity }} | {{ row.Steps }} |
{% endfor %}

## Hvordan omregner du motion til aktivitet?

Vælg din aktivitet i omregneren, og indtast det antal minutter du har været aktiv. Omregneren kvitterer med det antal skridt du kan notere i stedet for din aktivitet.

## Baggrunden for omregning

"Omregnede skridt" er typisk relativt store tal. Det skyldes at vi udregner tallene på baggrund af MET-værdier (Metabolic Equivalent of Task), eller med andre ord hvor megen energi en given aktivitet kræver.

Det tal du får ud af udregneren svarer således til det antal skridt du ville skulle gå, hvis du skulle forbrænde den samme mængde energi, som den aktivitet du har valgt, i det antal minutter du har indtastet.

Husk at beregneren kun er en estimering af antallet af skridt. Ikke nødvendigvis det faktuelle antal skridt.

---
title: 'Mental Health Should Be a Horizontal, Not a Vertical'
date: 2025-04-24
permalink: /posts/2025/04/mental-health-horizontal-not-vertical/
author_profile: false
tags:
  - mental health
  - medicine
  - essays
  - psychology
---

Most hospitals are organized as a set of verticals: cardiology, oncology, endocrinology, neurology, primary care, each running its own clinic, its own team, its own referral pathway.
Mental health usually gets slotted in as one more vertical on that list, a department a patient is sent to if someone happens to notice they need it.
This essay argues that this placement is a structural mistake, because the thing mental health actually touches, motivation and belief, is not one organ system among others.
It runs underneath all of them.

## The Vertical Model

Walk into almost any large hospital and the organizational chart tells you how care is supposed to flow.
A patient with chest pain is routed to cardiology.
A patient with a tumor is routed to oncology.
A patient with unmanaged blood sugar is routed to endocrinology.
Each department has its own specialists, its own protocols, its own budget line, and its own definition of a successful outcome, usually a lab value, an imaging result, or a survival curve.

Mental health sits in this structure as a peer department rather than a foundation.
A patient only reaches it if a clinician in one of the other verticals notices something is off and files a referral, if the patient is willing to accept that referral, and if a psychiatrist or psychologist happens to have capacity.
Every one of those conditions is a point of failure, and in practice most patients who would benefit never clear all three.

## Why This Breaks Down

The problem is that motivation, belief, and emotional state are not confined to the mental health vertical.
They are load-bearing inputs into almost every other vertical's outcomes.

A cardiac patient's willingness to take a statin every day for the rest of their life depends on whether they believe the medication is doing something, and depression is one of the strongest known predictors of nonadherence after a heart attack.
A diabetes patient's glucose control depends on whether they can sustain daily self-monitoring under stress, and chronic stress raises cortisol in ways that directly worsen insulin resistance, independent of diet.
A cancer patient's decision to complete a grueling course of chemotherapy depends on hope, on trust in the team, on whether despair has made the fight feel pointless.
Chronic pain, one of the most common reasons people end up in a hospital at all, is now understood by pain researchers to be shaped as much by fear and belief about the pain as by tissue damage itself.
None of this is fringe science.
It is closer to consensus than most of what gets treated as settled in medicine, and yet the org chart does not reflect it.

The current model treats these as psychiatric side effects to be referred out, when they are frequently the mechanism by which the primary treatment succeeds or fails.
A cardiologist who ignores a patient's depression is not being careless about an unrelated problem.
They are missing the actual determinant of whether the stent they placed keeps the patient alive five years from now.

## What the Shift Looks Like

<div style="margin: 32px 0;">
<iframe srcdoc='<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mental Health: Vertical vs Horizontal</title>
<style>
    * { box-sizing: border-box; }
    html, body {
        height: auto;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        margin: 0;
        padding: 24px;
        background: white;
        color: #2c3e50;
    }
    .container {
        max-width: 760px;
        margin: 0 auto;
    }
    .panel {
        background: #f8f9fa;
        border-radius: 12px;
        padding: 24px 24px 20px 24px;
        margin-bottom: 24px;
    }
    .panel-title {
        font-size: 15px;
        font-weight: 700;
        color: #2c3e50;
        margin: 0 0 2px 0;
    }
    .panel-caption {
        font-size: 12.5px;
        color: #7f8c8d;
        margin: 0 0 20px 0;
        line-height: 1.5;
    }
    .towers {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        height: 130px;
    }
    .tower {
        flex: 1;
        height: 100%;
        border-radius: 6px 6px 4px 4px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 8px;
        position: relative;
    }
    .tower-solid {
        background: rgba(52, 73, 94, 0.12);
        border: 1.5px solid rgba(52, 73, 94, 0.28);
    }
    .tower-isolated {
        background: rgba(231, 76, 60, 0.10);
        border: 1.5px dashed rgba(231, 76, 60, 0.65);
    }
    .tower-label {
        font-size: 10.5px;
        font-weight: 600;
        color: #2c3e50;
        text-align: center;
        line-height: 1.25;
        padding: 0 2px;
    }
    .tower-isolated .tower-label {
        color: #c0392b;
    }
    .gap-marks {
        display: flex;
        gap: 8px;
        margin-top: 6px;
    }
    .gap-mark {
        flex: 1;
        text-align: center;
        font-size: 13px;
        color: #d5dbdb;
    }
    .gap-mark.active {
        color: #e74c3c;
        font-weight: 700;
    }
    .towers-integrated {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        height: 100px;
        position: relative;
        z-index: 2;
    }
    .tower-top {
        flex: 1;
        height: 100%;
        border-radius: 6px 6px 0 0;
        background: rgba(52, 73, 94, 0.12);
        border: 1.5px solid rgba(52, 73, 94, 0.28);
        border-bottom: none;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 8px;
    }
    .connectors {
        display: flex;
        gap: 8px;
        margin: 0;
    }
    .connector {
        flex: 1;
        display: flex;
        justify-content: center;
    }
    .connector-line {
        width: 2px;
        height: 14px;
        background: repeating-linear-gradient(to bottom, #3498db 0, #3498db 3px, transparent 3px, transparent 6px);
    }
    .band {
        background: rgba(52, 152, 219, 0.14);
        border: 1.5px solid rgba(52, 152, 219, 0.55);
        border-radius: 8px;
        padding: 10px 16px;
        text-align: center;
    }
    .band-title {
        font-size: 12px;
        font-weight: 700;
        color: #2166a3;
        margin: 0 0 2px 0;
    }
    .band-sub {
        font-size: 10.5px;
        color: #2166a3;
        opacity: 0.85;
        margin: 0;
    }
    .insight {
        background: #f8f9fa;
        border-left: 4px solid #3498db;
        padding: 14px 18px;
        border-radius: 4px;
        margin-top: 4px;
    }
    .insight p {
        margin: 6px 0;
        font-size: 13px;
        color: #34495e;
        line-height: 1.5;
    }
    .insight strong {
        color: #2c3e50;
    }
</style>
</head>
<body>
<div class="container">
    <div class="panel">
        <p class="panel-title">Today: mental health as its own vertical</p>
        <p class="panel-caption">Each department runs as an independent column. Mental health is one column among the rest, reached only through a formal referral.</p>
        <div class="towers">
            <div class="tower tower-solid" style="height: 70%;"><span class="tower-label">Cardiology</span></div>
            <div class="tower tower-solid" style="height: 85%;"><span class="tower-label">Oncology</span></div>
            <div class="tower tower-solid" style="height: 60%;"><span class="tower-label">Endocrinology</span></div>
            <div class="tower tower-solid" style="height: 75%;"><span class="tower-label">Neurology</span></div>
            <div class="tower tower-solid" style="height: 55%;"><span class="tower-label">Primary Care</span></div>
            <div class="tower tower-isolated" style="height: 95%;"><span class="tower-label">Mental Health</span></div>
        </div>
        <div class="gap-marks">
            <div class="gap-mark active">&#10005;</div>
            <div class="gap-mark active">&#10005;</div>
            <div class="gap-mark active">&#10005;</div>
            <div class="gap-mark active">&#10005;</div>
            <div class="gap-mark active">&#10005;</div>
            <div class="gap-mark" style="visibility:hidden;">&#10005;</div>
        </div>
    </div>
    <div class="panel">
        <p class="panel-title">Proposed: mental health as a horizontal layer</p>
        <p class="panel-caption">Every department sits on the same layer of motivation, belief, adherence, and stress physiology, because that layer already shapes their outcomes.</p>
        <div class="towers-integrated">
            <div class="tower-top" style="height: 70%;"><span class="tower-label">Cardiology</span></div>
            <div class="tower-top" style="height: 85%;"><span class="tower-label">Oncology</span></div>
            <div class="tower-top" style="height: 60%;"><span class="tower-label">Endocrinology</span></div>
            <div class="tower-top" style="height: 75%;"><span class="tower-label">Neurology</span></div>
            <div class="tower-top" style="height: 55%;"><span class="tower-label">Primary Care</span></div>
        </div>
        <div class="connectors">
            <div class="connector"><div class="connector-line"></div></div>
            <div class="connector"><div class="connector-line"></div></div>
            <div class="connector"><div class="connector-line"></div></div>
            <div class="connector"><div class="connector-line"></div></div>
            <div class="connector"><div class="connector-line"></div></div>
        </div>
        <div class="band">
            <p class="band-title">Mental Health &amp; Behavioral Health</p>
            <p class="band-sub">motivation &middot; beliefs &middot; adherence &middot; coping &middot; stress physiology</p>
        </div>
    </div>
    <div class="insight">
        <p><strong>The shift:</strong> mental health stops being a department a patient is referred to, and becomes a layer of expertise embedded inside every department.</p>
    </div>
</div>
</body>
</html>' width="100%" height="700" frameborder="0" style="border: 1px solid #ddd; border-radius: 8px;"></iframe>
</div>

This is a familiar pattern to anyone who has worked in software or organizational design.
A capability that every team depends on, security, observability, data quality, fails when it is built as its own siloed team that other teams file a ticket to reach.
It only works when it is a horizontal, a layer of expertise and tooling embedded inside every team's own workflow, with its own specialists sitting alongside the people doing the primary work rather than waiting behind a queue.
Mental health, inside a hospital, is exactly this kind of capability, and it is currently organized the wrong way.

## What Horizontal Integration Actually Requires

This is not a new idea in medicine, even if it remains the exception rather than the rule.
The collaborative care model, developed and tested most rigorously through the IMPACT trial for late-life depression, embeds a behavioral health specialist directly inside the primary care team, with a psychiatrist supervising a shared caseload rather than seeing patients one by one.
Consult-liaison psychiatry does something similar inside hospitals, sending psychiatric expertise onto the medical wards instead of waiting for the patient to be discharged into an outpatient referral.
Psycho-oncology and behavioral cardiology are, in effect, attempts to bolt a horizontal layer onto two specific verticals because the evidence linking mental state to outcome became too strong to ignore in those two fields specifically.

What has not happened is a systemic version of this, done across departments as a default rather than as a series of one-off specialty programs.
That would mean routine screening for mood, motivation, and health beliefs built into every visit, not just intake forms in a mental health clinic.
It would mean behavioral health clinicians co-located with cardiology, oncology, and endocrinology teams rather than housed in a separate building.
It would mean a shared care plan and a shared patient record where psychological state is a first-class variable next to lab values, not a note buried in a separate chart that the cardiologist never opens.
It would mean training every clinician, not just psychiatrists, in the basics of motivational interviewing, because adherence conversations happen in every specialty, every day, whether or not the specialty considers it part of the job.

## Why It Has Not Happened

The barriers are structural, not conceptual.
Reimbursement models pay per specialty visit, which makes a horizontal capability hard to bill for, since it does not fit neatly into a single procedure code.
Medical training is itself organized vertically, so clinicians outside psychiatry get relatively little grounding in the psychological drivers of the outcomes they are responsible for.
Hospital budgets and org charts mirror the same verticals, which means a horizontal function has no natural owner fighting for its headcount.
And stigma still makes "we found you a psychiatrist" land differently than "we are adjusting your care plan," even when the underlying clinical action is the same.

None of these barriers are about whether the idea is correct.
They are about the fact that hospitals, like most large organizations, are easier to build as a set of towers than as a layer that runs underneath all of them.

## Conclusion

The claim in this essay is a narrow one, but I think it has broad implications.
Mental health is not one specialty among many, competing for the same kind of attention as endocrinology or neurology.
It is closer to a layer that determines how well every other specialty's treatment actually gets used by the person receiving it.
Treating it as a vertical means that most patients never reach it until something has already gone wrong.
Treating it as a horizontal means building it into the default experience of every department, on the correct assumption that beliefs and motivation are already shaping outcomes there, whether or not anyone assigned to that team is trained to notice.

## Further Reading

1. [The Need for a New Medical Model: A Challenge for Biomedicine](https://www.science.org/doi/10.1126/science.847460){:target="_blank"}. *George L. Engel*.
1. [Collaborative Care Management of Late-Life Depression in the Primary Care Setting](https://jamanetwork.com/journals/jama/fullarticle/195474){:target="_blank"}. *Jürgen Unützer et al.*
1. [Why Zebras Don't Get Ulcers](https://www.penguinrandomhouse.com/books/295199/why-zebras-dont-get-ulcers-by-robert-m-sapolsky/){:target="_blank"}. *Robert M. Sapolsky*.

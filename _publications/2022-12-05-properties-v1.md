---
title: "Properties of V1 and MT motion tuning emerge from unsupervised predictive learning"
collection: publications
category: journals
permalink: /publication/2022-12-05-properties-v1
excerpt: 'Unsupervised predictive learning creates neural-like single-unit tuning, population tuning statistics, and integration of locally-ambiguous motion signals, and provides an interrogable model of why motion computations take the form they do.'
date: 2022-12-05
venue: 'Journal of Vision'
paperurl: 'https://www.semanticscholar.org/paper/Properties-of-V1-and-MT-motion-tuning-emerge-from-Storrs-Kampman/8b9f344165a3938409fa97429b902986fb7c97e5'
citation: 'Storrs et al. (2022). &quot;Properties of V1 and MT motion tuning emerge from unsupervised predictive learning.&quot; <i>Journal of Vision</i>.'
---

Our ability to perceive motion arises from a hierarchy of motion-tuned cells in visual cortices.
Signatures of V1 and MT motion tuning emerge in artificial neural networks trained to report speed and direction of sliding images (Rideaux & Welchman, 2020).
However, the brain’s motion code must develop without access to such ground truth information.
Here we tested whether a more realistic learning objective—unsupervised learning by predicting future observations—also yields motion processing that resembles physiology.
We trained a two-layer recurrent convolutional network based on predictive coding principles (PredNet; Lotter, Kreiman & Cox, 2016) to predict the next frame in videos.
Training stimuli were 64,000 six-frame videos depicting natural image fragments sliding with uniformly-sampled random velocity and direction.
The network’s learning objective was to minimise mean absolute pixel error between its prediction and the actual next frame.
Despite receiving no explicit information about direction or velocity, we found that almost all units in both layers of the network developed tuning to a specific motion direction and velocity, when probed with sliding sinusoidal gratings.
The network also recapitulated population-level properties of motion tuning in V1. In both layers, mean activation across the population of units showed a motion direction anisotropy, peaking at 90 and 270 degrees (vertical motion), likely due to static orientation statistics of natural images.
Like MT neurons, units in the network appeared to solve the “aperture problem”.
When probed using pairs of orthogonally-drifting gratings superimposed to create plaid patterns, almost all units were tuned to the direction of the whole pattern, rather than its individual components.
Unsupervised predictive learning creates neural-like single-unit tuning, population tuning statistics, and integration of locally-ambiguous motion signals, and provides an interrogable model of why motion computations take the form they do.

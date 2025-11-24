---
title: "Time-varying functional connectivity as Wishart processes"
collection: publications
category: journal article
permalink: /publication/2024-06-01-time-varying-functional
excerpt: 'The WP outperformed a sliding window approach with adaptive cross-validated window lengths and a dynamic conditional correlation-multivariate generalized autoregressive conditional heteroskedasticity (MGARCH) baseline on the external stimulus prediction task, while being less prone to false positives in the TVFC null models.'
date: 2024-06-01
venue: 'Imaging Neuroscience'
paperurl: 'https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00184/121101/Time-varying-functional-connectivity-as-Wishart'
citation: 'Kampman et al. (2024). &quot;Time-varying functional connectivity as Wishart processes.&quot; <i>Imaging Neuroscience</i>.'
---

We investigate the utility of Wishart processes (WPs) for estimating time-varying functional connectivity (TVFC), which is a measure of changes in functional coupling as the correlation between brain region activity in functional magnetic resonance imaging (fMRI).
The WP is a stochastic process on covariance matrices that can model dynamic covariances between time series, which makes it a natural fit to this task.
Recent advances in scalable approximate inference techniques and the availability of robust open-source libraries have rendered the WP practically viable for fMRI applications.
We introduce a comprehensive benchmarking framework to assess WP performance compared with a selection of established TVFC estimation methods.
The framework comprises simulations with specified ground-truth covariance structures, a subject phenotype prediction task, a test-retest study, a brain state analysis, an external stimulus prediction task, and a novel data-driven imputation benchmark.
The WP performed competitively across all the benchmarks.
It outperformed a sliding window (SW) approach with adaptive cross-validated window lengths and a dynamic conditional correlation (DCC)-multivariate generalized autoregressive conditional heteroskedasticity (MGARCH) baseline on the external stimulus prediction task, while being less prone to false positives in the TVFC null models.

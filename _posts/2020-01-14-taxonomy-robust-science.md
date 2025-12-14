---
title: 'A Taxonomy of Robust Science'
date: 2020-01-14
permalink: /posts/2020/01/taxonomy-robust-science/
author_profile: false
tags:
  - psychology
  - science
---

This post describes some important concepts in open and robust science.

I took this great course on behavioral science as a robust discipline by Amy Orben at the University of Cambridge during my PhD.
It has since greatly influenced how I see the fields of psychology and neuroscience, but also science in general.
In fact, Samuel Bell and I wrote a short paper on what the field of machine learning research could learn from the reproducibility crisis in psychology.

One of the basic building blocks of this intellectual exercise is that we agree on a common terminology.
Brian Nosek and collaborators wrote a great review paper on this (see below).
Importantly, while the crisis in psychology is referred to as both the "reproducibility" or "replicability" crisis, these concepts do not have the same meaning.
**Reproducibility** refers to obtaining the (exact) same results when you re-run an analysis.
In machine learning, this could mean re-running data analysis or model training scripts on GitHub.
If you have fixed the random seed, you should be able to get exactly the same results each time.
This practice is important, because it ensures there are no bugs in the code, and the results reported in a publication are true according to the analysis.
When researchers publish their data analysis scripts, this is a big win for Open Science.
**Replicability** refers to obtaining the same conclusion when an experiment is repeated.
Of course, there are many sources of noise in the world, so repeating someone's experiment based on their methods description will always yield slightly different results.
But the overall conclusion *should* hold.
If one study of high school students shows that social media usage is associated with higher rates of depression, but a replication of this study (e.g., at a different school) does not find this effect, we are still left in the dark.
This is what makes psychology a hard field to work in: there are so many variables to control for and effect sizes are typically so small, that many findings do not replicate (even though they might *reproduce*).
Lastly, **robustness** refers to obtaining the same results under minor but reasonable changes to the methodology.
In machine learning, for example, if a trained model outperforms the state-of-the-art model, but a tiny change to the learning rate erases this, we can refer to this result as *fragile*.
Fragile results are a risk factor for replicability, generalizability, and overall trustworthiness.

It's worth noting why reproducibility alone is insufficient.
Even if an analysis is perfectly reproducible (yielding identical results every time the code is run), the researchers may have made numerous subjective decisions that shape those results.
These are called **researcher degrees of freedom**: choices about which participants to exclude, how to handle missing data, which covariates to include, how to transform variables, when to stop data collection, and so on.
This creates a "garden of forking paths" of combinatorallly many ways to do an experiment.
Each of these decisions is often defensible in isolation, but researchers may consciously or unconsciously choose the path that yields more favorable results, for example getting to a p-value below 0.05 in what is called "p-hacking".
A perfectly reproducible analysis can still be misleading if it represents just one of many possible analytical paths the researchers could have taken.
This is why practices like pre-registration, where researchers commit to their analysis plan before seeing the data, have become increasingly important.
Reproducibility ensures we can verify what researchers did; robustness and replicability help us understand whether their findings survive reasonable alternative choices and new data.

All of this greatly matters for the development of AI models and their application to high-stakes domains such as healthcare.
We cannot treat all conclusions in the scientific literature as facts.
Rather, we should dynamically adjust our confidence in these results, based on whether the results are reproducible, robust, and replicable.

## Further Reading

1. [Robust Behavioural Science](https://amyorben.com/uploads/syllabus.pdf){:target="_blank"}. *Amy Orben*.
1. [Perspectives on Machine Learning from Psychology's Reproducibility Crisis](https://onnokampman.com/publication/2021-04-18-perspectives-machine-learning){:target="_blank"}. *Bell and Kampman (2021)*.
1. [Replicability, Robustness, and Reproducibility in Psychological Science](https://www.annualreviews.org/content/journals/10.1146/annurev-psych-020821-114157){:target="_blank"}. *Brian Nosek et al. (2022)*.
1. [The 7 Deadly Sins of Psychology: A manifesto for reforming the culture of scientific practice.](https://www.amazon.sg/Seven-Deadly-Sins-Psychology-Scientific/dp/0691158908){:target="_blank"}. *Chris Chambers (2017)*.

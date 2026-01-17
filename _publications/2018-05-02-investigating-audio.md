---
title: "Investigating Audio, Video, and Text Fusion Methods for End-to-End Automatic Personality Prediction"
collection: publications
category: manuscripts
permalink: /publication/2018-05-02-investigating-audio
excerpt: 'It is shown that a multimodal fusion approach outperforms each single modality channel, with an improvement of 9.4% over the best individual modality (video).'
date: 2018-05-02
venue: 'ACL'
paperurl: 'https://www.semanticscholar.org/paper/Investigating-Audio%2C-Video%2C-and-Text-Fusion-Methods-Kampman-Barezi/949cc039d4c5fea8313e2d7d67fbd95a15b18259'
citation: 'Kampman et al. (2018). &quot;Investigating Audio, Video, and Text Fusion Methods for End-to-End Automatic Personality Prediction.&quot; <i>ACL</i>.'
---

We propose a tri-modal architecture to predict Big Five personality trait scores from video clips with different channels for audio, text, and video data.
For each channel, stacked Convolutional Neural Networks are employed.
The channels are fused both on decision-level and by concatenating their respective fully connected layers.
It is shown that a multimodal fusion approach outperforms each single modality channel, with an improvement of 9.4% over the best individual modality (video).
Full backpropagation is also shown to be better than a linear combination of modalities, meaning complex interactions between modalities can be leveraged to build better models.
Furthermore, we can see the prediction relevance of each modality for each trait.
The described model can be used to increase the emotional intelligence of virtual agents.

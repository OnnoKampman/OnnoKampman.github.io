---
title: "Attention-Based LSTM for Psychological Stress Detection from Spoken Language Using Distant Supervision"
collection: publications
category: manuscripts
permalink: /publication/2018-04-14-attention-based-lstm
excerpt: "The bidirectional LSTM model with attention is found to be the best model in terms of accuracy and f-score and it is shown that distant supervision fine-tuning enhances the model's performance by 1.6% accuracy and 2.1% f-score."
date: 2018-04-14
venue: 'ICASSP'
paperurl: 'https://www.semanticscholar.org/paper/Nora-the-Empathetic-Psychologist-Winata-Kampman/a770ead81c84ec2f0c845dcc821a3f7763765808'
citation: 'Winata et al. (2018). &quot;Attention-Based LSTM for Psychological Stress Detection from Spoken Language Using Distant Supervision.&quot; <i>ICASSP</i>.'
---

We propose a Long Short-Term Memory (LSTM) with attention mechanism to classify psychological stress from self-conducted interview transcriptions.
We apply distant supervision by automatically labeling tweets based on their hash-tag content, which complements and expands the size of our corpus.
This additional data is used to initialize the model parameters, and which it is fine-tuned using the interview data.
This improves the model's robustness, especially by expanding the vocabulary size.
The bidirectional LSTM model with attention is found to be the best model in terms of accuracy (74.1%) and f-score (74.3%).
Furthermore, we show that distant supervision fine-tuning enhances the model's performance by 1.6% accuracy and 2.1% f-score.
The attention mechanism helps the model to select informative words.

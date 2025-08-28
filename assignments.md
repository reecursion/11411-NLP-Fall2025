---
layout: default
title: Assignments
---

<div class="page-header">
  <h1>Assignments</h1>
</div>

<div class="assignments-content">
  <p class="assignments-intro">This course includes four programming assignments and a final project. All assignments must be completed individually unless otherwise specified.</p>
  
  <div class="card assignment-card">
    <h2>Assignment 1: Language ID</h2>
    <div class="assignment-meta">
      <p><strong>Released:</strong> Sep 11, 2025</p>      
      <p><strong>Due:</strong> Oct 2, 2025 at 11:59 PM</p>  
    </div>
        
    <div class="assignment-description">
      <h3>Overview</h3>
      <p>In this assignment, you will build a language identification classifier that distinguishes between six languages:</p>
      
      <ul>
        <li><a href="https://en.wikipedia.org/wiki/Hausa_language" target="_blank">Hausa</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Indonesian_language" target="_blank">Indonesian</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Manobo_languages" target="_blank">Manobo</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Nahuatl" target="_blank">Nahuatl</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Swahili_language" target="_blank">Swahili</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Tagalog_language" target="_blank">Tagalog</a></li>
      </ul>

      <p>Some languages can be distinguished easily, because they use different scripts. These six languages, however, use the same (<a href="https://en.wikipedia.org/wiki/Latin_script" target="_blank">Latin</a>) script with minimal <a href="https://en.wikipedia.org/wiki/Diacritic" target="_blank">diacritics</a> so it is difficult to hand-craft classifiers based on the presence or absence of particular characters. Indeed, unless you have linguistic training or familiarity with the languages, it is difficult to tell them apart.</p>

      <p>How can they be distinguished? A naïve approach is to use word counts as unigram features. However, the number of possible words in a large corpus of five languages is vast. It is essential to look at something smaller — characters.</p>

      <p>Even though the six languages use roughly the same characters, the relative frequencies of these characters vary greatly. Thus, using characters as features (unigram character models) is appealing (and fairly effective). It is also true that languages very in their <em>phonotactics</em>, the way in which consonants and vowels combine in sequence. Thus, looking at character ngrams (for small values of n) is also appealing (and effective). Note, however, that as the value of n increases, this approach runs into the same problem as the word unigram model (sparcity). In this scenario, the model is likely to overfit.</p>

      <p>Various kinds of classifiers can be used for this application. NB classifiers, for example, are quite effective. However, inference is slow and performance, given the same training set, is likely to be worse than other options. Simple logistic regression cannot be used because this is an n-way (multinomial) classification problem. Multinomial Logistic Regression (Softmax Regression) is a good fit.</p>

      <h3>Summary</h3>
      <p>You will perform the following tasks:</p>
      <ol>
        <li>Implement a training loop for Multinomial Logistic Regression.</li>
        <li>Implement inference for Multinomal Logistic Regression</li>
        <li>Determine the optimal order of n for ngrams for MNLR trained on the training set.</li>
        <li>Calculate and display a confusion matrix for a trigram model evaluated on the test set.</li>
        <li>Inspect the feature weights, and display the most predictive features for each language.</li>
      </ol>

      <div class="assignment-resources">
        <!-- <a href="#" class="btn">Coming Soon</a> -->
        <a href="https://canvas.cmu.edu/courses/44875/assignments/819534" class="btn">Canvas</a>
      </div>
    </div>
  </div>
  
  <div class="card assignment-card">
    <h2>Assignment 2: Language Modelling</h2>
    <div class="assignment-meta">
      <p><strong>Released:</strong> Oct 2, 2025</p>   
      <p><strong>Due:</strong> Oct 23, 2025 at 11:59 PM</p> 
    </div>
    
    <div class="assignment-description">
      <h3> TBA </h3>
      <!-- <h3>Overview</h3>
      <p>In this homework, you will be building your first language models. You will be expected
        to build an n-gram language model and a recurrent neural network (RNN) language
        model. You will also implement Laplace Smoothing for the n-gram model (a lazy version)
        to account for unknown words.</p>

      <p>This assignment will be submitted via Gradescope in two parts. Upload both deliverables to Gradescope:</p>
      <ol>
        <li><strong>Programming:</strong> Paste the functions and classes from the notebook into two files
        called <code>ngram_lm.py</code> and <code>rnn_lm.py</code>, which are included in the handout. Upload
        these files without zipping them.</li>
        <li><strong>Written:</strong> Submit answers to the questions as a PDF file.</li>
      </ol>
      
      <div class="assignment-resources">
        <!-- <a href="#" class="btn">Coming Soon</a> -->
        <a href="https://canvas.cmu.edu/courses/44875/assignments/822790" class="btn">Canvas</a>
      </div>
    </div> -->
  </div>
  
  <div class="card assignment-card">
    <h2>Assignment 3: Clickbait Detection</h2>
    <div class="assignment-meta">
      <p><strong>Released:</strong> Oct 23, 2025</p>     
      <p><strong>Due:</strong> Nov 13, 2025 at 11:59 PM</p>  
    </div>
    
    <div class="assignment-description">
      <h3> TBA </h3>
      <!-- <h3>Overview</h3>
      <p>In this assignment, you will implement text classification systems to detect clickbait headlines. You will work with word embeddings and analyze their effectiveness for this task.</p>
      
      <h3>Learning Objectives</h3>
      <ul>
        <li>Implement neural text classifiers for binary classification</li>
        <li>Work with pre-trained word embeddings</li>
        <li>Analyze model performance and feature importance</li>
        <li>Compare different classification approaches</li>
      </ul>
      
      <h3>Tasks</h3>
      <ol>
        <li>Implement a neural classifier for clickbait detection</li>
        <li>Use pre-trained word embeddings</li>
        <li>Analyze model performance on different types of headlines</li>
        <li>Evaluate and compare classification approaches</li>
      </ol>
      
      <div class="assignment-resources">
        <!-- <a href="#" class="btn">Coming Soon</a> -->
        <a href="https://canvas.cmu.edu/courses/44875/assignments" class="btn">Canvas</a>
      </div>
    </div> -->
  </div>
  
  <div class="card assignment-card">
    <h2>Assignment 4: TBA</h2>
    <div class="assignment-meta">
      <p><strong>Released:</strong> Nov 13, 2025</p>     
      <p><strong>Due:</strong> Dec 4, 2025 at 11:59 PM</p>  
    </div>
    
    <div class="assignment-description">
      <h3> TBA </h3>
      <!-- <h3>Overview</h3>
      <p>In this assignment, you will implement a named entity recognition system using sequence modeling techniques. You will explore different architectures and evaluate their performance.</p>
      
      <h3>Learning Objectives</h3>
      <ul>
        <li>Implement sequence labeling architectures</li>
        <li>Work with contextualized word representations</li>
        <li>Train and evaluate NER systems</li>
        <li>Analyze model behavior and output quality</li>
      </ul>
      
      <h3>Tasks</h3>
      <ol>
        <li>Implement a sequence labeling model</li>
        <li>Incorporate contextual information</li>
        <li>Train models on annotated data</li>
        <li>Evaluate NER performance using precision, recall, and F1 score</li>
      </ol>
      
      <div class="assignment-resources">
        <a href="#" class="btn">Coming Soon</a>
      </div>
    </div> -->
  </div>
  
  <div class="card assignment-card">
    <h2>Final Exam</h2>
    <div class="assignment-meta">
      <p><strong>Date:</strong> TBD</p>
      <!-- <p><strong>Weight:</strong> 25% of final grade</p> -->
    </div>
    
    <div class="assignment-description">
      <h3>Overview</h3>
      <p>The final exam will cover all topics discussed throughout the course. It will include a mix of conceptual questions and problem-solving tasks.</p>
      
      <h3>Format</h3>
      <p>The exam will consist of 4-5 questions with multiple parts. The questions will be designed to test conceptual understanding rather than recall of facts. The exam is open book and open notes but non-collaborative.</p>
      
      <h3>Preparation</h3>
      <p>To prepare for the exam, review lecture materials, complete all assignments, and participate in the review session. Practice applying the concepts to novel problems rather than memorizing solutions to specific examples.</p>
      
      <div class="assignment-resources">
        <a href="#" class="btn">Practice Questions</a>
      </div>
    </div>
  </div>
</div>
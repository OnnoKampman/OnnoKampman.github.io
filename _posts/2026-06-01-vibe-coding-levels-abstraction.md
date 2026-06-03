---
title: 'Vibe Coding and Levels of Abstraction'
date: 2026-06-01
permalink: /posts/2026/06/vibe-coding-levels-abstraction/
author_profile: false
tags:
  - computer science
  - neuroscience
  - AI
  - essays
---

One of the most underappreciated ideas in all of science is the idea of abstraction.
Not in the abstract (excuse the pun), but as a practical tool for understanding, building, and communicating.
The history of computer science is arguably the history of abstraction.
And right now, with the rise of AI coding tools, that history is more relevant than ever.

## From machine code to Python

In the early days of computing, writing software meant writing in machine code: sequences of binary instructions that the processor executes directly.
Every byte mattered.
You had to know exactly where in memory your data lived, how the registers worked, when to push and pop the stack.
It was extraordinarily powerful and extraordinarily demanding.

Then came assembly language, which let programmers write `MOV AX, 5` instead of `10111000 00000101`.
A small mercy, but an abstraction nonetheless.
Then came higher-level languages: Fortran, COBOL, C.
Then object-oriented languages.
Then scripting languages like Python and Ruby, where you can write a web server in ten lines without once thinking about memory allocation.

At each layer, the programmer was freed from the details of the layer below.
And crucially, this was *good*.
The Python programmer who has never touched assembly is not deficient.
They have simply accepted a useful division of labor.
The compiler writer handles the machine code.
The operating system handles memory.
The interpreter handles types.
The programmer handles the problem.

This is not laziness or ignorance — it is abstraction working exactly as intended.
By trusting the layers below, each layer above can move faster and think at a higher level — the entire structure holds because every layer is sound.

## True expertise spans all levels

Here is where things get interesting.

Wired runs a YouTube series in which a domain expert explains a single concept to five different audiences — a child, a teenager, an undergraduate student, a graduate student, and a fellow expert — in five completely different ways.

What is remarkable is not that the child gets a simpler version — that is expected.
What is remarkable is that the expert genuinely engages at each level.
They do not condescend to the child, nor do they leave the PhD student unchallenged.
They find the *right* framing for each listener.
That is the mark of deep understanding.

A physicist who can only explain quantum mechanics to other physicists does not fully understand it.
True mastery involves being able to compress the essential structure of an idea and re-express it in terms the listener already understands.
Richard Feynman, famously, would test his own understanding by trying to explain concepts to undergraduates without jargon.
If he could not, he concluded he did not yet understand it himself.

This is not about dumbing things down.
It is about finding the correct level of abstraction for the question at hand.
The child asking "what is electricity?" does not need Maxwell's equations.
But the electrical engineer diagnosing a circuit fault does.
Neither answer is wrong.
They are answers to *different questions* at *different levels*.

## David Marr and the levels of analysis

In 1982, neuroscientist David Marr published *Vision*, a book that would quietly reshape how cognitive scientists think about the brain.
Marr argued that any information-processing system — including the brain — must be understood at three distinct levels:

1. **The computational level**: What is the system doing, and why? What problem is it solving?
2. **The algorithmic level**: How does it do it? What representations and procedures does it use?
3. **The implementational level**: How is all of this physically realized? In neurons, in silicon, in code?

Marr's insight was that researchers in his field were obsessed with the implementational level.
They catalogued neurons, mapped receptive fields, traced circuits.
This is important work.
But it does not, by itself, answer the computational question.
Knowing that the visual cortex contains simple and complex cells does not tell you why the visual system extracts edges and orientations — that requires a different kind of analysis, at a different level.

The same mistake can be made in reverse.
A purely abstract theory of vision that never touches biology risks being unfalsifiable.
Marr's point was that you need all three levels, and you need to know which level your current question lives at.
Confusing levels — answering a computational question with an implementational fact, or vice versa — is not just unhelpful.
It is a category error.

This framework travels well beyond neuroscience.
Ask "why does this software crash?" and you might need to descend to the implementational level: a buffer overflow, a race condition, a null pointer.
Ask "is this the right product to build?" and you need the computational level: what problem are we solving, for whom, and why?
The algorithmic level sits in between: does this architecture actually solve the problem efficiently?

A good software engineer knows intuitively which level a question belongs to and engages accordingly.
A bad diagnosis is often just a level mismatch: debugging at the algorithmic level when the bug is implementational, or bikeshedding over code style when the product direction is the real question.

## Vibe coding and the right level for the reviewer

This brings us to vibe coding — a term coined by Andrej Karpathy in early 2025 to describe a mode of software development where you essentially describe what you want in natural language, let an AI write the code, and rarely read the output closely.
The code works (or seems to), and you move on.

The term has been received with a mixture of enthusiasm and horror, and understandably so.
Engineers who have spent years developing taste for code quality find it uncomfortable, and the concern is legitimate: if no one reads the code, who catches the subtle bugs, the security vulnerabilities, the architectural decisions that will cost you six months later?

But there is a more interesting idea hiding inside vibe coding that often gets lost in the debate.

Consider a product manager reviewing a new feature.
They do not read the code, and they never have.
But that does not make their review useless.
They can check whether the login flow works for a first-time user.
They can verify that the error messages are clear.
They can confirm that the feature matches the specification they wrote three weeks ago.
This is not hand-waving — this is a review conducted at the *correct level of abstraction* for their role.

The CEO who approves a product direction based on a demo is not ignorant.
They are engaging at the computational level: is this solving the right problem?
The engineering lead reviewing the architecture diagram is at the algorithmic level: is the design sound?
The developer reviewing the pull request is at the implementational level: is this code correct and maintainable?
Each review is legitimate, and each is incomplete without the others.

The failure mode of vibe coding is not that non-technical people participate in review — they always have.
The failure mode is when the implementational level goes *unreviewed entirely* — when no one with the right expertise asks whether the code is actually correct, secure, and maintainable.
Abstraction is not an excuse to skip levels.
It is a way to distribute responsibility appropriately across people who each own their level.

## Where this is heading

The honest future of AI-assisted development is not a world where nobody understands code.
It is a world where different stakeholders engage with software at the level appropriate to their role, with better tooling to support each level.

A product manager does not need to review lines of Python.
But they could write acceptance criteria precise enough that an AI can generate meaningful integration tests from them.
That is not dumbing down the engineering process — it is moving the product manager's contribution to the level where it belongs: defining *what correct means*, not *how correctness is achieved*.

Similarly, the future of code review is not that senior engineers rubber-stamp AI-generated code.
It is that the review process becomes more explicit about which level is being reviewed and by whom.
A security engineer reviewing for vulnerabilities is doing something fundamentally different from a domain expert reviewing for business logic correctness.
Treating both as "code review" conflates two different levels of analysis and leaves entire categories of problems unreviewed.

The more interesting question is what the right tooling for each level actually looks like — and that work is still largely ahead of us.

## Blurring roles

There is a further wrinkle worth noting.

Historically, the abstraction levels in software development mapped reasonably cleanly onto professional roles: executives set strategy at the computational level, product managers and architects worked at the algorithmic level, and engineers implemented at the lowest level.

That mapping is dissolving.

A founder with no programming background who uses an AI coding tool to build a working prototype is, in some meaningful sense, programming — translating a computational-level goal into something executable, with AI handling the gap in between.
Meanwhile, a senior engineer whose day consists mostly of writing specifications for AI agents, reviewing generated outputs, and debugging unexpected behavior is, in some meaningful sense, managing.

The roles are not disappearing.
The levels of analysis still exist, and someone still has to own each one.
But the assumption that different people will always own different levels is weakening.
AI is compressing the skill gradient required to operate across levels, which means the same person can increasingly move between them.

Dan Shapiro has written about this trajectory toward what he calls the "dark factory" — a software production system that takes a specification as input and returns working, tested, deployed software as output, without a human writing or reviewing a single line of code in between.
We are not there yet, and how far we should go remains an open question.
But the direction is clear: the implementational level is being automated upward, pushing human attention toward the computational and algorithmic levels — where the questions are harder, the stakes are higher, and the judgment required is more genuinely human.

The question is not whether to embrace or resist this shift, but how to remain clear-eyed about which level a given problem lives at, and who — or what — is best equipped to answer it.

## Further reading

1. Marr, D. (1982). *Vision: A Computational Investigation into the Human Representation and Processing of Visual Information*. W.H. Freeman.
1. Karpathy, A. (2025). "There's a new kind of coding I call 'vibe coding'". Post on X (formerly Twitter), February 2025.
1. Feynman, R. P. (1985). *Surely You're Joking, Mr. Feynman!*. W. W. Norton & Company.
1. Philbin, C. A. (2017). [*Crash Course Computer Science*](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo) [YouTube playlist].
1. Schluntz, E. (2025). ["Vibe Coding in Production: How Anthropic Uses AI to Write Code"](https://www.youtube.com/watch?v=78EYLieMpvc) [YouTube].
1. Shapiro, D. (2026). "The Five Levels: from Spicy Autocomplete to the Dark Factory". danshapiro.com.
1. Shapiro, D. (2026). "Dark Factories: Rise of the Trycycle". danshapiro.com.

export type EbookSection = {
    title: string
    body: string
}

export type EbookChapter = {
    slug: string
    part?: string
    number: string
    title: string
    page: string
    summary: string
    sections: EbookSection[]
}

export const ebook = {
    title: "Essential Math For Data Science",
    subtitle: "An interactive ebook scaffold built from the table of contents",
    author: "Thomas Nield",
    publisher: "O'Reilly Media",
    description:
        "A chapter-first reading experience with route-based navigation, anchored section headings, and a reusable content model for adding the full book text.",
}

export const chapters: EbookChapter[] = [
    {
        slug: "an-introduction-to-large-language-models",
        part: "Part I. Understanding Language Models",
        number: "1",
        title: "An Introduction to Large Language Models",
        page: "3",
        summary:
            "Introduce language AI, explain how modern LLMs emerged, and connect the field’s history to the models and workflows used throughout the book.",
        sections: [
            {
                title: "What Is Language AI?",
                body: "Language AI is the part of artificial intelligence focused on understanding, processing, and generating human language. It includes everything from classic NLP techniques to modern systems that power translation, classification, search, and conversational interfaces.\n\nThe term AI has been used very broadly over the years, sometimes even for simple rule-based systems, but Language AI is specifically about systems that work with text and language. In practice, the field spans natural language processing, retrieval, conversational interfaces, text generation, and models that help computers work with human language more effectively.\n\nIn this book, Language AI is the umbrella term for the techniques, models, and supporting systems that shape how modern language systems are built and used.",
            },
            {
                title: "A Recent History of Language AI",
                body: "The history of Language AI moves from symbolic and statistical methods toward neural approaches that represent language in structured ways. That progression set the stage for embeddings, attention, transformers, and the large language models that dominate current practice.\n\nA major challenge throughout that history has been that language is unstructured and difficult for computers to reason about directly. The field’s evolution is largely a story of turning text into forms that machines can work with more naturally while preserving meaning and context.",
            },
            {
                title: "Representing Language as a Bag-of-Words",
                body: "Bag-of-words converts text into vectors by counting token occurrences in a vocabulary. It is simple and still useful, but it ignores word order and most semantic nuance.\n\nThe method starts with tokenization, usually by splitting text on whitespace, and then builds a vocabulary of unique tokens. Each sentence or document is represented by counting how often each token appears, which gives us a numeric representation that computers can process.\n\nAlthough classic, the approach is still useful in some settings and later chapters revisit how it can complement newer language models.",
            },
            {
                title: "Better Representations with Dense Vector Embeddings",
                body: "Dense embeddings improve on bag-of-words by encoding semantic relationships in fixed-length vectors. Models such as word2vec learned these representations from large corpora by placing semantically similar words near each other in vector space.\n\nRather than treating every token as an isolated count, embeddings represent words as collections of learned properties. Those properties are often not human-readable on their own, but together they help the computer capture meaning and similarity in a way bag-of-words cannot.",
            },
            {
                title: "Types of Embeddings",
                body: "Embeddings can represent different units of language, from words to sentences and full documents. Their role becomes central later in the book for classification, clustering, semantic search, and retrieval-augmented generation.\n\nWord embeddings, sentence embeddings, and document-level representations all serve different purposes, but they share the same basic idea: transform text into vectors that preserve useful semantic information.",
            },
            {
                title: "Encoding and Decoding Context with Attention",
                body: "Recurrent models improved context handling by using encoder-decoder structures, but they still struggled with long sequences. Attention introduced a way to focus on the most relevant parts of a sequence and strengthened contextual understanding.\n\nInstead of compressing everything into a single representation, attention allows a model to focus on the tokens that matter most for the output it is trying to produce. That makes context handling more flexible and more accurate.",
            },
            {
                title: "Attention Is All You Need",
                body: "The transformer architecture replaced recurrence with attention-driven blocks that can be trained in parallel. This change dramatically improved scalability and became the foundation for many modern language models.\n\nThe architecture stacks attention-based encoder and decoder blocks and removes the sequential bottleneck that slowed earlier models. This is the core idea behind many of the systems that dominate modern Language AI.",
            },
            {
                title: "Representation Models: Encoder-Only Models",
                body: "Encoder-only models such as BERT are built to produce strong contextual representations rather than generate text. They are especially effective for classification, feature extraction, and other understanding-oriented tasks.\n\nThese models use the encoder side of the transformer architecture and are commonly pretrained with masked language modeling before being fine-tuned for specific tasks.",
            },
            {
                title: "Generative Models: Decoder-Only Models",
                body: "Decoder-only models such as GPT are optimized for text completion and generation. They predict the next token autoregressively, which makes them ideal for chat, writing, and instruction-following behavior.\n\nThese models are the basis for many large language models because they can be trained to autocomplete text and then adapted into instruct or chat models that follow user prompts.",
            },
            {
                title: "The Year of Generative AI",
                body: "ChatGPT made generative AI visible to a massive audience and triggered a wave of adoption, product launches, and research. The result was a rapid expansion of both proprietary and open models, as well as new architectures that pushed the field forward.\n\nThis period is often described as the year that drastically changed the field, with nearly all attention focused on large language models and the systems built around them.",
            },
            {
                title: "The Moving Definition of a \"Large Language Model\"",
                body: "The term LLM has expanded beyond only the largest decoder-only models. In this book, it includes smaller, practical models as well as representation models that play an important role in language systems.\n\nThe definition changes over time because the field changes. A model does not stop being useful just because a newer, larger model appears, so the book uses a broader definition that includes practical models you can run and work with directly.",
            },
            {
                title: "The Training Paradigm of Large Language Models",
                body: "LLMs are typically built in two major stages: pretraining on broad internet-scale text and then fine-tuning for more specific tasks or behaviors. That pipeline is what turns a base model into a usable assistant or task-specific system.\n\nPretraining gives the model broad language ability, while fine-tuning adapts it to a narrower task, such as following instructions or handling classification. This multistep approach is one of the defining characteristics of modern LLMs.",
            },
            {
                title: "Large Language Model Applications: What Makes Them So Useful?",
                body: "LLMs are useful because they can adapt to many tasks with prompting, fine-tuning, retrieval, and multimodal inputs. They can classify text, discover topics, answer questions, work with documents, and generate outputs based on user intent.\n\nTheir value comes from flexibility: the same underlying model can support multiple use cases, from summarization to chatbots to document retrieval and beyond.",
            },
            {
                title: "Responsible LLM Development and Usage",
                body: "LLMs can amplify bias, produce incorrect claims, obscure accountability, and raise intellectual-property concerns. Responsible use means understanding these risks and applying guardrails when deploying them in real systems.\n\nBecause they can confidently generate incorrect or misleading text, it is important to think about transparency, safety, and human oversight whenever these systems are deployed in sensitive contexts.",
            },
            {
                title: "Limited Resources Are All You Need",
                body: "Running and training LLMs depends heavily on GPU memory and compute availability. This book focuses on practical workflows that work on modest hardware, including free or low-cost environments.\n\nThe reality of GPU and VRAM limits shapes what models you can run locally, and this book keeps that constraint front and center by choosing approaches that are accessible on consumer hardware.",
            },
            {
                title: "Interfacing with Large Language Models",
                body: "Working with LLMs means interacting through APIs, local runtimes, and framework packages. The book covers both proprietary and open-model workflows so you can choose the right tradeoff for your use case.\n\nThis includes understanding how to load models, how to pass prompts, and how the surrounding tooling affects the behavior and practical usability of a system.",
            },
            {
                title: "Proprietary, Private Models",
                body: "Closed models are accessed through hosted APIs and usually require no local GPU, but they trade away direct control, transparency, and fine-tuning flexibility. They are useful when convenience and performance matter most.\n\nThe provider handles the infrastructure, which reduces setup overhead, but the model itself remains opaque to the user.",
            },
            {
                title: "Open Models",
                body: "Open models expose weights and often the code needed to run them locally. They give you more control, more privacy, and more flexibility, but they also require more setup and hardware awareness.\n\nBecause they can be run directly by the user, they are attractive when transparency, customizability, and local control are important.",
            },
            {
                title: "Open Source Frameworks",
                body: "Frameworks such as Transformers, LangChain, and llama.cpp provide the tooling for loading, running, and composing model-based applications. Once you understand the patterns, switching between frameworks becomes much easier.\n\nThe book focuses on these backend-oriented tools because they expose the core building blocks for working with language models in code.",
            },
            {
                title: "Generating Your First Text",
                body: "The chapter closes by showing the basic workflow for loading a tokenizer and a generative model, then asking it to produce text. That first example demonstrates how little code is needed to begin experimenting with LLMs.\n\nThe important point is that generation requires both the model and its tokenizer, and once those are loaded, you can begin prompting the model to produce responses.",
            },
            {
                title: "Summary",
                body: "Chapter 1 establishes the language-AI landscape, traces the evolution from bag-of-words to transformers, and introduces the practical concerns that shape the rest of the book. It ends by setting up the tokenization and embedding concepts covered next.\n\nThe big takeaway is that modern LLMs are part of a wider Language AI ecosystem, and understanding that ecosystem is key to using them well.",
            },
        ],
    },
    {
        slug: "tokens-and-embeddings",
        part: "Part I. Understanding Language Models",
        number: "2",
        title: "Tokens and Embeddings",
        page: "37",
        summary:
            "Break language into tokens, inspect tokenizer behavior, and introduce embeddings for text, words, and recommendations.",
        sections: [
            { title: "LLM Tokenization", body: "Add the conceptual introduction to tokenization here." },
            { title: "How Tokenizers Prepare the Inputs to the Language Model", body: "Explain the preprocessing pipeline from text to model-ready tokens." },
            { title: "Downloading and Running an LLM", body: "Place the first local execution example here." },
            { title: "How Does the Tokenizer Break Down Text?", body: "Use this section for token segmentation behavior and examples." },
            { title: "Word Versus Subword Versus Character Versus Byte Tokens", body: "Compare token granularities and tradeoffs." },
            { title: "Comparing Trained LLM Tokenizers", body: "Show tokenizer differences across model families." },
            { title: "Tokenizer Properties", body: "Describe vocabulary size, normalization, special tokens, and related properties." },
            { title: "Token Embeddings", body: "Introduce the embedding layer and how tokens become vectors." },
            { title: "A Language Model Holds Embeddings for the Vocabulary of Its Tokenizer", body: "Explain the vocabulary matrix concept here." },
            { title: "Creating Contextualized Word Embeddings with Language Models", body: "Show how context changes the meaning of token embeddings." },
            { title: "Text Embeddings (for Sentences and Whole Documents)", body: "Use this section for sentence and document vector representations." },
            { title: "Word Embeddings Beyond LLMs", body: "Broaden the scope to classical embedding models." },
            { title: "Using pretrained Word Embeddings", body: "Add a usage example for existing embeddings." },
            { title: "The Word2vec Algorithm and Contrastive Training", body: "Explain the training objective and model mechanics." },
            { title: "Embeddings for Recommendation Systems", body: "Transition from language to recommendation use cases." },
            { title: "Recommending Songs by Embeddings", body: "Give a concrete recommendation example here." },
            { title: "Training a Song Embedding Model", body: "Walk through the training flow for the example model." },
            { title: "Summary", body: "Close the chapter with a concise recap." },
        ],
    },
    {
        slug: "looking-inside-large-language-models",
        part: "Part I. Understanding Language Models",
        number: "3",
        title: "Looking Inside Large Language Models",
        page: "73",
        summary:
            "Inspect the transformer forward pass, token sampling, attention internals, caching, and architecture improvements.",
        sections: [
            { title: "An Overview of Transformer Models", body: "Start with a high-level explanation of transformer architecture." },
            { title: "The Inputs and Outputs of a Trained Transformer LLM", body: "Show the shape of the model interface and generation loop." },
            { title: "The Components of the Forward Pass", body: "Break the forward pass into readable stages here." },
            { title: "Choosing a Single Token from the Probability Distribution (Sampling/Decoding)", body: "Explain how the model picks the next token." },
            { title: "Parallel Token Processing and Context Size", body: "Discuss batching, context windows, and limitations." },
            { title: "Speeding Up Generation by Caching Keys and Values", body: "Add KV caching and its effect on performance." },
            { title: "Inside the Transformer Block", body: "Detail the attention and feed-forward components of a block." },
            { title: "Recent Improvements to the Transformer Architecture", body: "List architecture refinements and why they matter." },
            { title: "More Efficient Attention", body: "Discuss efficiency improvements for attention mechanisms." },
            { title: "The Transformer Block", body: "Summarize the complete block in one cohesive view." },
            { title: "Positional Embeddings (RoPE)", body: "Use this section for rotary positional embedding details." },
            { title: "Other Architectural Experiments and Improvements", body: "Capture other experiments and design tradeoffs." },
            { title: "Summary", body: "End with the chapter summary and transition note." },
        ],
    },
]

export function getChapterBySlug(slug: string) {
    return chapters.find((chapter) => chapter.slug === slug)
}

export function getChapterIndex(slug: string) {
    return chapters.findIndex((chapter) => chapter.slug === slug)
}

export function getChapterNavigation(slug: string) {
    const index = getChapterIndex(slug)

    if (index < 0) {
        return null
    }

    return {
        previous: chapters[index - 1] ?? null,
        next: chapters[index + 1] ?? null,
    }
}

export function getFirstChapter() {
    return chapters[0] ?? null
}

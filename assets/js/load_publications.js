function addBreak(string) {
    return string ? string + '<br>' : string;
  }


$(function() {
    let venues = {
        HPCA: "International Symposium on High-Performance Computer Architecture (HPCA)",
        ISCA: "International Symposium on Computer Architecture (ISCA)",
        PLDI: "Programming Language Design and Implementation (PLDI)",
        ASPLOS: "International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)",
        PLARCH: "Workshop: Programming Languages for Architecture (PLArch)",
        YARCH: "Young Architect Workshop (YArch)",
        OSDI: "USENIX Symposium on Operating Systems Design and Implementation (OSDI)"
    }

    let publications = [
        {
            title: "Caravan: Practical Online Learning of In-Network ML Models with Labeling Agents",
            authors: "Qizheng Zhang, Ali Imran, Enkeleda Bardhi, Tushar Swamy, Nathan Zhang, Muhammad Shahbaz, and Kunle Olukotun",
            venue: venues.OSDI,
            year: 2024,
            pdfs: [
                {
                    title: "Proceedings",
                    url: "https://www.usenix.org/conference/osdi24/presentation/zhang-qizheng"
                }
            ]
        },
        {
            title: "The Dataflow Abstract Machine Simulator Framework",
            authors: "Nathan Zhang, Rubens Lacouture, Gina Sohn, Paul Mure, Qizheng Zhang, Fredrik Kjolstad, and Kunle Olukotun",
            venue: venues.ISCA,
            year: 2024,
            pdfs: [
                {
                    title: "PDF",
                    url: "/papers/DAM_ISCA24.pdf"
                }
            ],
            awards: ["Distinguished Artifact Award"]
        },
        {
            title: "Revet: A Language and Compiler for Dataflow Threads",
            authors: "Alexander Rucker, Shiv Sundram, Coleman Smith, Matt Vilim, Raghu Prabhakar, Fredrik Kjolstad, and Kunle Olukotun",
            venue: venues.HPCA,
            year: 2024,
            pdfs: [
                {
                    title: "Proceedings",
                    url: "https://www.computer.org/csdl/proceedings-article/hpca/2024/931300a061/1VOAE5MbS8M"
                },
            ],
        },
        {
            title: "Streaming Tensor Programs: A Programming Abstraction for Streaming Dataflow Accelerators",
            authors: "Gina Sohn, Christophe Gyurgik, Genghan Zhang, Suguna Velury, Paul Mure, Nathan Zhang, Kunle Olukotun",
            venue: venues.YARCH,
            year: 2024,
            pdfs: [
                {
                    title: "PDF",
                    url: "/papers/YARCH24_STEP.pdf"
                }
            ]
        },
        {
            title: "Dynamic Memory for Distributed Archtictures",
            authors: "Gina Sohn, Genghan Zhang, Suguna Velury, Nathan Zhang, and Kunle Olukotun",
            venue: venues.YARCH,
            year: 2024,
            pdfs: [
                {
                    title: "PDF",
                    url: "/papers/yarch24_dynamicmem.pdf"
                }
            ]
        },
        {
            title: "Mosaic: An Interoperable Compiler for Tensor Algebra",
            authors: "Manya Bansal, Olivia Hsu, Kunle Olukotun, and Fredrik Kjolstad",
            venue: venues.PLDI,
            year: 2023,
            pdfs: [
                {
                    title: "Proceedings",
                    url: "https://dl.acm.org/doi/10.1145/3591236"
                }
            ],
            awards: ["Distinguished Paper Award"]
        },
        {
            title: "Sigma: Compiling Einstein Summations to Locality-Aware Dataflow",
            authors: "Tian Zhao, Alex Rucker, Kunle Olukotun",
            venue: venues.ASPLOS,
            year: 2023,
            pdfs: [
                {
                    title: "Proceedings",
                    url: "https://dl.acm.org/doi/abs/10.1145/3575693.3575694"
                }
            ],
        },
        {
            title: "BaCO: A Fast and Portable Bayesian Compiler Optimization Framework",
            authors: "Erik Orm Hellsten, Artur Souza, Johannes Lenfers, Rubens Lacouture, Olivia Hsu, Adel Ejjeh, Fredrik Kjolstad, Michel Steuwer, Kunle Olukotun, and Luigi Nardi",
            venue: venues.ASPLOS,
            year: 2023,
            pdfs: [
                {
                    title: "Proceedings",
                    url: "https://dl.acm.org/doi/10.1145/3623278.3624770"
                },
                {
                    title: "Arxiv",
                    url: "https://arxiv.org/abs/2212.11142"
                }
            ]
        },
        {
            title: "Tags: A Framework for Distributed Event Ordering",
            authors: "Paul Mure, Nathan Zhang, Caroline Trippel, and Kunle Olukotun",
            venue: venues.PLARCH,
            year: 2023,
            pdfs: [
                {
                    title: "PDF",
                    url: "/papers/plarch23_tags.pdf"
                },
                {
                    title: "Video",
                    url: "https://www.youtube.com/watch?v=0IYU1wCmvw8"
                }
            ]
        }
    ];

    let target = $("#publication-insert");
    publications.forEach(function(pub){

        const pdfs = pub.pdfs.map(function(pdf) {
            return `<a href="${pdf.url}" target="_blank">${pdf.title}</a>`
        }).join(" | ");

        const awards = ("awards" in pub) ? pub.awards.map(function(award) {return `<b>${award}</b>`}).join(" | ") : "";

        const entry = `
        <div class="pub" title="">
          <p><strong>${pub.title}</strong><br>
            ${pub.authors}<br>
            <em>${pub.venue} | ${pub.year}</em> <br>

            ${addBreak(awards)}

            ${pdfs}

          </p>
        </div>
        `
        target.append(entry);
    });
})
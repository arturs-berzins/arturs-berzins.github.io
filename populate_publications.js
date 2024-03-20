/**
 * Populate the list of publications
 * TODO: add thumbnails
 */


const publicationData = [
    // {
    //     key: '',
    //     title: '',
    //     authors: '',
    //     outlet: '',
    //     link_paper: '',
    //     link_code: '',
    //     abstract: '',
    //     bibtex: '',
    // },
    {
        key: 'berzins23ginn',
        title: 'Geometry-Informed Neural Networks',
        authors: '<author-me>Arturs Berzins</author-me>, Andreas Radler, Sebastian Sanokowski, Sepp Hochreiter, Johannes Brandstetter',
        outlet: 'arXiv:2402.14009 [cs.LG], 2024',
        link_paper: 'https://arxiv.org/abs/2402.14009',
        link_code: '',
        abstract: 'We introduce the concept of geometry-informed neural networks (GINNs), which encompass (i) learning under geometric constraints, (ii) neural fields as a suitable representation, and (iii) generating diverse solutions to under-determined systems often encountered in geometric tasks. Notably, the GINN formulation does not require training data, and as such can be considered generative modeling driven purely by constraints. We add an explicit diversity loss to mitigate mode collapse. We consider several constraints, in particular, the connectedness of components which we convert to a differentiable loss through Morse theory. Experimentally, we demonstrate the efficacy of the GINN learning paradigm across a range of two and three-dimensional scenarios with increasing levels of complexity.',
        bibtex: `${bibtex.Berzins24ginn}`,
        thumbnail: 'resources/thumbnails/berzins24ginn.png',
    },
    {
        key: 'berzins23relu',
        title: 'Polyhedral Complex Extraction from ReLU Networks using Edge Subdivision',
        authors: '<author-me>Arturs Berzins</author-me>',
        outlet: '40th International Conference on Machine Learning (ICML 2023)',
        link_paper: 'https://arxiv.org/abs/2306.07212',
        link_code: 'https://github.com/arturs-berzins/relu_edge_subdivision',
        abstract: 'A neural network consisting of piecewise affine building blocks, such as fully-connected layers and ReLU activations, is itself a piecewise affine function supported on a polyhedral complex. This complex has been previously studied to characterize theoretical properties of neural networks, but, in practice, extracting it remains a challenge due to its high combinatorial complexity. A natural idea described in previous works is to subdivide the regions via intersections with hyperplanes induced by each neuron. However, we argue that this view leads to computational redundancy. Instead of regions, we propose to subdivide edges, leading to a novel method for polyhedral complex extraction. A key to this are sign-vectors, which encode the combinatorial structure of the complex. Our approach allows to use standard tensor operations on a GPU, taking seconds for millions of cells on a consumer grade machine. Motivated by the growing interest in neural shape representation, we use the speed and differentiability of our method to optimize geometric properties of the complex.',
        bibtex: `${bibtex.Berzins23relu}`,
        thumbnail: 'resources/thumbnails/berzins23relu.png',
    },
    {
        key: 'berzins23bs',
        title: 'Neural Implicit Shape Editing using Boundary Sensitivity',
        authors: '<author-me>Arturs Berzins</author-me>, Moritz Ibing, Leif Kobbelt',
        outlet: 'The Eleventh International Conference on Learning Representations (ICLR 2023)',
        link_paper: 'https://arxiv.org/abs/2304.12951',
        link_code: 'https://github.com/arturs-berzins/boundary_sensitivity',
        abstract: 'Neural fields are receiving increased attention as a geometric representation due to their ability to compactly store detailed and smooth shapes and easily undergo topological changes. Compared to classic geometry representations, however, neural representations do not allow the user to exert intuitive control over the shape. Motivated by this, we leverage boundary sensitivity to express how perturbations in parameters move the shape boundary. This allows to interpret the effect of each learnable parameter and study achievable deformations. With this, we perform geometric editing: finding a parameter update that best approximates a globally prescribed deformation. Prescribing the deformation only locally allows the rest of the shape to change according to some prior, such as semantics or deformation rigidity. Our method is agnostic to the model its training and updates the NN in-place. Furthermore, we show how boundary sensitivity helps to optimize and constrain objectives (such as surface area and volume), which are difficult to compute without first converting to another representation, such as a mesh.',
        bibtex: `${bibtex.Berzins23bs}`,
        thumbnail: 'resources/thumbnails/berzins23bs.png',
    },
    {
        key: 'berzins20snirom',
        title: 'Standardized Non-Intrusive Reduced Order Modeling Using Different Regression Models With Application to Complex Flow Problems',
        authors: '<author-me>Arturs Berzins</author-me>, Jan Helmig, Fabian Key, Stefanie Elgeti',
        outlet: 'arXiv:2006.13706 [physics.comp-ph], 2020',
        link_paper: 'https://arxiv.org/abs/2006.13706',
        link_code: 'https://github.com/arturs-berzins/sniROM',
        abstract: 'In recent years, numerical methods in industrial applications have evolved from a pure predictive tool towards a means for optimization and control. Since standard numerical analysis methods have become prohibitively costly in such multi-query settings, a variety of reduced order modeling (ROM) approaches have been advanced towards complex applications. In this context, the driving application for this work is twin-screw extruders (TSEs): manufacturing devices with an important economic role in plastics processing. Modeling the flow through a TSE requires non-linear material models and coupling with the heat equation alongside intricate mesh deformations, which is a comparatively complex scenario. We investigate how a non-intrusive, data-driven ROM can be constructed for this application. We focus on the well-established proper orthogonal decomposition (POD) with regression albeit we introduce two adaptations: standardizing both the data and the error measures as well as -- inspired by our space-time simulations -- treating time as a discrete coordinate rather than a continuous parameter. We show that these steps make the POD-regression framework more interpretable, computationally efficient, and problem-independent. We proceed to compare the performance of three different regression models: Radial basis function (RBF) regression, Gaussian process regression (GPR), and artificial neural networks (ANNs). We find that GPR offers several advantages over an ANN, constituting a viable and computationally inexpensive non-intrusive ROM. Additionally, the framework is open-sourced to serve as a starting point for other practitioners and facilitate the use of ROM in general engineering workflows.',
        bibtex: `${bibtex.Berzins20snirom}`,
        thumbnail: 'resources/thumbnails/berzins20snirom.png',
    },
    {
        key: 'bunge20textile',
        title: 'Textile Multitouch Force-Sensor Array Based on Circular and Non-Circular Polymer Optical Fibers',
        authors: 'Christian-Alexander Bunge, Jan P. Kallweit, Mohmmed Al Houri, Benjamin Mohr, <author-me>Arturs Berzins</author-me>, Christian Grauberger, Putu Adi, Thomas Gries',
        outlet: 'IEEE Sensors Journal, 20(14): 7548-7555, 2020',
        link_paper: 'https://ieeexplore.ieee.org/document/9055193',
        link_code: '',
        abstract: 'A 3 × 3 textile integrated force-sensor array is presented that is based on the cross coupling of optical fibers and provides multi-touch capability. The force sensing relies on cross coupling between two fibers that are aligned orthogonally to each other. The actual coupling is improved by an increased contact area and higher scattering at the fiber crossing. A systematic analysis of different parameters is done for the driving and the sensing fiber, which involves materials, size, fabrication parameters as well as the cross-section shape. The results reveal that the combination of a rather stiff driving fiber and a flexible sensing fiber from elastomer (TPU) lead to the highest sensitivities in the range of 45.5 pW/N. The application of non-circular cross sections can improve the coupling efficiency by directing the side-emitted light better towards the sensing fiber. A trilobal-shaped driving fiber lead to an increase of 5 dBs, whereas the shaping of the sensing fiber improved the efficiency by another 7.5 dB.',
        bibtex: `${bibtex.Bunge20textile}`,
        thumbnail: 'resources/thumbnails/bunge20textile.png',
    },
    // {
    //     key: 'Kallweit2019textile',
    //     title: 'Textile Touch-Sensor Array based on Circular and Non-Circular Polymer Optical Fibers',
    //     authors: 'Jan P. Kallweit, Christian-Alexander Bunge, Mohmmed Al Houri, Benjamin Mohr, <author-me>Arturs Berzins</author-me>, Christian Grauberger, Putu Adi, Thomas Gries',
    //     outlet: 'IEEE International Conference on Flexible and Printable Sensors and Systems (FLEPS), 2019',
    //     link_paper: 'https://ieeexplore.ieee.org/document/8792239',
    //     link_code: '',
    //     abstract: 'Textiles and flexible textile surfaces can be found in many industrial goods. Due to trends like smart textiles and consumer electronics touchpads and flexible touch-sensitive sensor arrays that can be integrated in these textile surfaces are increasingly in demand. A multi-touch capable textile touchpad based on polymer optical fibers (POF) is presented. For the sensing fibers, different fiber cross sections - from circular to trilobal - are studied for maximum sensitivity and minimum cross talk. Results show that the trilobal cross section improves the sensitivity and the strength of the sensor signal by about 50%.',
    //     bibtex: `${bibtex.Kallweit19textile}`,
    // },
  ];


function fill_template_publication(data){
    const li_class = "list-inline-item"; // bootstrap list item specification
    const btn_class = "btn btn-outline-dark btn-sm"; // bootstrap button specification
    var innerHTML = `
        <div class="row">
        <div class="col-md-2" >
            <img src="${data.thumbnail}" class="mx-auto d-block" style="max-height: 8em; max-width: 100%; width: auto;">
        </div>
        <div class="col-md-10">
            <div class="title">${data.title}</div>
            <div class="authors">${data.authors}</div>
            <div class="chanel">${data.outlet}</div>
            <div class="links">
                <ul class="list-inline list-inline-horizontal" id='ul-link-${data.key}'>
                    <li class='${li_class}' id='li-abs-${data.key}'><button class='${btn_class}' id='absBtn${data.key}' onclick="toggleBox('${data.key}', 'abs')">Abstract</button></li>
                    <li class='${li_class}' id='li-bib-${data.key}'><button class='${btn_class}' id='bibBtn${data.key}' onclick="toggleBox('${data.key}', 'bib')">BibTeX</button></li>
                    <li class='${li_class}' id='li-paper-${data.key}'><a class='${btn_class}' href="${data.link_paper}" target="_blank">Paper</a></li>
                    <li class='${li_class}' id='li-code-${data.key}'><a class='${btn_class}' href="${data.link_code}" target="_blank">Code</a></li>
                </ul>
                <div class="absBox" id="absBox${data.key}">
                    <p>${data.abstract}</p>
                </div>
                
                <div class="bibBox" id="bibBox${data.key}">
                    <button class="btn btn-light btn-sm copyButton" onclick="copyToClipboard(this)"> <img src="img/icons/clipboard.svg"> </button>
                    <pre>${data.bibtex}</pre>
                </div>
            </div>
        </div>
        </div>
    `
    return innerHTML
}


document.addEventListener('DOMContentLoaded', function() {
    
    function createListItem(data) {
        var listItem = document.createElement('li');
        listItem.innerHTML = fill_template_publication(data);
        return listItem;
    }
    
    var listContainer = document.getElementById('publications');
    
    publicationData.forEach(function (data) {
        var listItem = createListItem(data);
        listContainer.appendChild(listItem);
        /** Remove optional links
         * Alternatively, this can be done directly in the innerHTML using logical expressions like this:
         * ${data.link_code ? `<li class='${li_class}' id='li-code-${data.key}'><a class='${btn_class}' href="${data.link_code}" target="_blank">Code</a></li>` : ``}
         * This is cleaner programmatically, but way harder to read, so let's be explicit about this step.
         */
        if (!data.link_code) document.getElementById(`li-code-${data.key}`).remove();
    });

});
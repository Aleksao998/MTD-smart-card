import React from "react";


const PricingSection = () => (
    <section id='pricing' class='section pricing-section' >
        <div class='container' >
            <div class='row' >
                <div class='col-md-4' >
                    <div class='col-section-header' >
                        <h2>Choose your plan or get started with free trial</h2>
                        <p>
                            Semper torquatos est no. cule at discere offendit, cule et fugit iuvaret omittam. Eu sint labore pri, ea probo tollit lobortis mea. Integre blandit aliquando ei vel, sit eirmod vituperata eu.
                        </p>
                        <a href='#' class='btn-minimal' >
                            Get Free Trial
                        </a>
                    </div>
                </div>
                <div class='col-md-4' >
                    <div class='p-table' >
                        <div class='header' >
                            <h4>Basic</h4>
                            <div class='price' >
                                <span class='currency' >$</span>
                                <span class='amount' >13</span>
                                <span class='period' >/mo</span>
                            </div>
                        </div>
                        <ul class='items' >
                            <li>1TB Storage</li>
                            <li>Late Support</li>
                            <li>3 Tasks /day</li>
                        </ul>
                        <a href='#' class='btn-minimal' >
                            Sign Up
                        </a>
                    </div>
                </div>
                <div class='col-md-4' >
                    <div class='p-table' >
                        <div class='header' >
                            <h4>Pro</h4>
                            <div class='price' >
                                <span class='currency' >$</span>
                                <span class='amount' >24</span>
                                <span class='period' >/mo</span>
                            </div>
                        </div>
                        <ul class='items' >
                            <li>2TB Storage</li>
                            <li>Instant Support</li>
                            <li>Unlimited Tasks</li>
                        </ul>
                        <a href='#' class='btn-minimal' >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
	</section>
);

export default PricingSection;
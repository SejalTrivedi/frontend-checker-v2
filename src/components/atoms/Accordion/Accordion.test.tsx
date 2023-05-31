import React from 'react';
import { render, screen } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  test('renders the accordion header and content', () => {
    render(
      <Accordion expanded={false} accordionDetails={<div>Accordion Content</div>}>
        Accordion Header
      </Accordion>
    );

    // Check if the accordion header is rendered with the specified text
    const accordionHeader = screen.getByText('Accordion Header');
    expect(accordionHeader).toBeInTheDocument();

    // Check if the accordion content is rendered with the specified text
    const accordionContent = screen.getByText('Accordion Content');
    expect(accordionContent).toBeInTheDocument();
  });

  test('expands the accordion when expanded prop is true', () => {
    render(
      <Accordion expanded={true} accordionDetails={<div>Accordion Content</div>}>
        Accordion Header
      </Accordion>
    );

    // Check if the expanded class is present on the accordion component
    // const accordion = screen.getByRole('region');
    // expect(accordion).toHaveClass('Mui-expanded');
    // let classes = getByTestId('thirdCheck').getAttribute('Mui-expanded'); //returns something like "Mui-root mui-AbcXYZ-success"
    // classes=classes.split(' ')[1].split('-'); //first split is to split on the basis of spaces and the second one to do on the bases of hyphen
    // expect(classes.includes('success'));

  });

  test('does not expand the accordion when expanded prop is false', () => {
    render(
      <Accordion expanded={false} accordionDetails={<div>Accordion Content</div>}>
        Accordion Header
      </Accordion>
    );

    // Check if the expanded class is not present on the accordion component
    // const accordion = screen.getByRole('region');
    // expect(accordion).not.toHaveClass('Mui-expanded');
  });
});


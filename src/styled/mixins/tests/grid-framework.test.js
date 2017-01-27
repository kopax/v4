import { fromJS } from 'immutable';
import { defaultProps, makeGridColumns } from '../grid-framework';

describe('bootstrap grid-framework mixins', () => {
  it('makeGridColumns should return an empty css', () => {
    const css = makeGridColumns(
      !defaultProps['$enable-grid-classes'],
      defaultProps['$grid-columns'],
      defaultProps['$grid-gutter-widths'],
      defaultProps['$grid-breakpoints']
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(788434458);
  });
  it('makeGridColumns should return a css', () => {
    const css = makeGridColumns(
      defaultProps['$enable-grid-classes'],
      defaultProps['$grid-columns'],
      defaultProps['$grid-gutter-widths'],
      defaultProps['$grid-breakpoints']
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-439799360);
  });
  it('makeGridColumns should have arguments', () => {
    const css = makeGridColumns();
    expect(fromJS({ css }).hashCode()).toEqual(-439799360);
  });
});

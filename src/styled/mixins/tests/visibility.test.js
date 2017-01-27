import { fromJS } from 'immutable';
import {
  invisible,
  hiddenBpUp,
  visiblePrintBlock,
  visiblePrintInline,
  visiblePrintInlineBlock,
  hiddenPrint,
} from '../visibility';

describe('bootstrap visibility mixins', () => {
  it('invisible should return a css', () => {
    const css = invisible();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(281334414);
  });
  it('hiddenBpUp should return a css', () => {
    const css = hiddenBpUp({
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    });
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-56064415);
  });
  it('hiddenBpUp should have arguments', () => {
    const css = hiddenBpUp();
    expect(fromJS({ css }).hashCode()).toEqual(-56064415);
  });
  it('visiblePrintBlock should return a css', () => {
    const css = visiblePrintBlock();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(191163055);
  });
  it('visiblePrintInline should return a css', () => {
    const css = visiblePrintInline();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-288551081);
  });
  it('visiblePrintInlineBlock should return a css', () => {
    const css = visiblePrintInlineBlock();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-795079173);
  });
  it('hiddenPrint should return a css', () => {
    const css = hiddenPrint();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-790624097);
  });
});

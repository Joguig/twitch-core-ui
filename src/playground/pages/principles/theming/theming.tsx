import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../../../components/layout';
import { FontSize, Text, TextType } from '../../../../components/text';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationToken, Token } from '../../../components/documentation/documentation-token';
import { DocumentationTokens } from '../../../components/documentation/documentation-tokens';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const ThemingPage = () => {
  return (
    <div className="theming-page full-width">
      <PageHeader
        title="Theming"
        description="Theming is designed to make color choices less arbitrary, enhance accessiblity – all while making it possible to support an infinite number of themes."
        updateDate="June 15, 2017"
      />

      <Layout margin={{ bottom: 5 }}>
        <div className="text-wrapper">
          <h3 id="concept" className="section__heading">Concept</h3>
          <div className="section__body">
            <p>The Twitch brand color palette is made up of fifteen shades of both grey and purple. In the past, we referenced these colors directly through SASS variables – such as <code>$twitch-purple-7</code>. It gave us a lot of flexibility but also left us with a lot of artbitrary color values and inaccessible contrast on elements.</p> <p>Our theming system now maps these colors to semantically named tokens. By developing new features using the tokens, we can guarantee that we will support light theme, dark theme, and any additional theme that may be created while ensuring we provide ample contrast to meet web accessiblity standards. [Do's/Don'ts]</p>
          </div>
        </div>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <h3 id="implementation" className="section__heading">Implementation</h3>
        <div className="section__body">
          <Text type={TextType.H4} fontSize={FontSize.Size4} strong>SASS</Text>
        </div>
        <DocumentationMarkup language="SASS">
  {`.feature
  +theme((color: 'color-text', background: 'color-background-alt'))

// Or

.feature
  +theme
    background:     token('color-background')
    border:         token('border-width') solid token('color-border')
    border-radius:  token('border-radius')`}
        </DocumentationMarkup>
        <div className="section__body">
          <Text type={TextType.H4} fontSize={FontSize.Size4} strong>React</Text>
          <p>See <Link to="/components/layout">Layout Component</Link></p>
        </div>
        <DocumentationMarkup>
{`<Layout background={Background.BackgroundAlt} color={Color.ColorAlt2}></Layout>`}
        </DocumentationMarkup>
        <div className="section__body">
          <Text type={TextType.H4} fontSize={FontSize.Size4} strong>HTML</Text>
        </div>
        <DocumentationMarkup language="HTML">
  {`<div class="c-text c-background-alt"></div>`}
        </DocumentationMarkup>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <h3 id="background-tokens" className="section__heading">Background Tokens</h3>
        <Layout margin={{ top: 1, bottom: 3 }}>
          <DocumentationTokens title="Base">
            <DocumentationToken token={Token.ColorBackground} tokenName="color-background" lightValue="$white" darkValue="$twitch-purple-1" />
            <DocumentationToken token={Token.ColorBackgroundAlt} tokenName="color-background-alt" lightValue="$hinted-grey-15" darkValue="$twitch-purple-3" />
            <DocumentationToken token={Token.ColorBackgroundAlt2} tokenName="color-background-alt-2" lightValue="$hinted-grey-14" darkValue="$twitch-purple-5" />
            <DocumentationToken token={Token.ColorBackgroundLive} tokenName="color-background-live" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorBackgroundPrime} tokenName="color-background-prime" lightValue="$prime-blue" darkValue="$prime-blue" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Buttons">
            <DocumentationToken token={Token.ColorBackgroundButton} tokenName="color-background-button" lightValue="$twitch-purple-7" darkValue="$twitch-purple-7" />
            <DocumentationToken token={Token.ColorBackgroundButtonHover} tokenName="color-background-button-hover" lightValue="$twitch-purple-8" darkValue="$twitch-purple-8" />
            <DocumentationToken token={Token.ColorBackgroundButtonFocus} tokenName="color-background-button-focus" lightValue="$twitch-purple-8" darkValue="$twitch-purple-8" />
            <DocumentationToken token={Token.ColorBackgroundButtonActive} tokenName="color-background-button-active" lightValue="$twitch-purple-7" darkValue="$twitch-purple-7" />
            <DocumentationToken token={Token.ColorBackgroundButtonDisabled} tokenName="color-background-button-disabled" lightValue="$hinted-grey-12" darkValue="$opac-p-7" />
            <DocumentationToken token={Token.ColorBackgroundButtonPurchase} tokenName="color-background-button-purchase" lightValue="$opac-b-5" darkValue="$opac-b-5" />
            <DocumentationToken token={Token.ColorBackgroundButtonHollow} tokenName="color-background-button-hollow" lightValue="$hinted-grey-10" darkValue="transparent" />
            <DocumentationToken token={Token.ColorBackgroundButtonHollowHover} tokenName="color-background-button-hollow-hover" lightValue="$hinted-grey-7" darkValue="$opac-p-4" />
            <DocumentationToken token={Token.ColorBackgroundButtonHollowFocus} tokenName="color-background-button-hollow-focus" lightValue="$hinted-grey-7" darkValue="$opac-p-4" />
            <DocumentationToken token={Token.ColorBackgroundButtonHollowActive} tokenName="color-background-button-hollow-active" lightValue="$hinted-grey-7" darkValue="$opac-p-2" />
            <DocumentationToken token={Token.ColorBackgroundButtonStatus} tokenName="color-background-button-status" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorBackgroundButtonStatusHover} tokenName="color-background-button-status-hover" lightValue="darken($red, 15%)" darkValue="darken($red, 15%)" />
            <DocumentationToken token={Token.ColorBackgroundButtonStatusFocus} tokenName="color-background-button-status-focus" lightValue="darken($red, 15%)" darkValue="darken($red, 15%)" />
            <DocumentationToken token={Token.ColorBackgroundButtonStatusActive} tokenName="color-background-button-status-active" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorBackgroundButtonSuccess} tokenName="color-background-button-status" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorBackgroundButtonSuccessHover} tokenName="color-background-button-status-hover" lightValue="darken($green, 5%)" darkValue="darken($green, 5%)" />
            <DocumentationToken token={Token.ColorBackgroundButtonSuccessFocus} tokenName="color-background-button-status-focus" lightValue="darken($green, 5%)" darkValue="darken($green, 5%)" />
            <DocumentationToken token={Token.ColorBackgroundButtonSuccessActive} tokenName="color-background-button-status-active" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorBackgroundButtonAlert} tokenName="color-background-button-alert" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorBackgroundButtonAlertHover} tokenName="color-background-button-alert-hover" lightValue="darken($red, 10%)" darkValue="darken($red, 15%)" />
            <DocumentationToken token={Token.ColorBackgroundButtonAlertFocus} tokenName="color-background-button-alert-focus" lightValue="darken($red, 10%)" darkValue="darken($red, 15%)" />
            <DocumentationToken token={Token.ColorBackgroundButtonAlertActive} tokenName="color-background-button-alert-active" lightValue="$red" darkValue="$red" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Interactable">
            <DocumentationToken token={Token.ColorBackgroundInteractable} tokenName="color-background-interactable" lightValue="transparent" darkValue="transparent" />
            <DocumentationToken token={Token.ColorBackgroundInteractableHover} tokenName="color-background-interactable-hover" lightValue="$twitch-purple-8" darkValue="$twitch-purple-6" />
            <DocumentationToken token={Token.ColorBackgroundInteractableActive} tokenName="color-background-interactable-actove" lightValue="$twitch-purple-7" darkValue="$twitch-purple-7" />
            <DocumentationToken token={Token.ColorBackgroundInteractableSelected} tokenName="color-background-interactable-selected" lightValue="$hinted-grey-12" darkValue="$hinted-grey-5" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Inputs & Toggle">
            <DocumentationToken token={Token.ColorBackgroundInput} tokenName="color-background-input" lightValue="$white" darkValue="$twitch-purple-3" />
            <DocumentationToken token={Token.ColorBackgroundInputChecked} tokenName="color-background-input-checked" lightValue="$twitch-purple-8" darkValue="$twitch-purple-8" />
            <DocumentationToken token={Token.ColorBackgroundToggle} tokenName="color-background-toggle" lightValue="$hinted-grey-10" darkValue="$twitch-purple-6" />
            <DocumentationToken token={Token.ColorBackgroundToggleHandle} tokenName="color-background-toggle-handle" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorBackgroundToggleHover} tokenName="color-background-toggle-handle" lightValue="$hinted-grey-9" darkValue="$twitch-purple-6" />
            <DocumentationToken token={Token.ColorBackgroundToggleFocus} tokenName="color-background-toggle-focus" lightValue="$hinted-grey-9" darkValue="$twitch-purple-6" />
            <DocumentationToken token={Token.ColorBackgroundToggleChecked} tokenName="color-background-toggle-checked" lightValue="$green" darkValue="$green" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Balloon">
            <DocumentationToken token={Token.ColorBackgroundBalloonHotspot} tokenName="color-background-balloon-hotspot" lightValue="$twitch-purple-7" darkValue="$twitch-purple-7" />
            <DocumentationToken token={Token.ColorBackgroundBalloonHotspotHover} tokenName="color-background-balloon-hotspot-hover" lightValue="$twitch-purple-8" darkValue="$twitch-purple-8" />
            <DocumentationToken token={Token.ColorBackgroundBalloonLinkHover} tokenName="color-background-balloon-link-hover" lightValue="$twitch-purple-7" darkValue="$twitch-purple-7" />
            <DocumentationToken token={Token.ColorBackgroundBalloonLinkSelected} tokenName="color-background-balloon-link-selected" lightValue="$hinted-grey-14" darkValue="$twitch-purple-5" />
            <DocumentationToken token={Token.ColorBackgroundBalloonTooltip} tokenName="color-background-balloon-tooltip" lightValue="$twitch-purple-1" darkValue="$white" />
            <DocumentationToken token={Token.ColorBackgroundBalloonPurple} tokenName="color-background-balloon-purple" lightValue="$twitch-purple-5" darkValue="$twitch-purple-5" />
            <DocumentationToken token={Token.ColorBackgroundBalloonAlert} tokenName="color-background-balloon-alert" lightValue="$red" darkValue="$red" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Overlay">
            <DocumentationToken token={Token.ColorBackgroundOverlay} tokenName="color-background-overlay" lightValue="$opac-b-9" darkValue="$opac-b-9" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Balloon">
            <DocumentationToken token={Token.ColorBackgroundProgress} tokenName="color-background-progress" lightValue="$hinted-grey-12" darkValue="$twitch-purple-6" />
            <DocumentationToken token={Token.ColorBackgroundProgressStatus} tokenName="color-background-progress" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorBackgroundProgressStatusError} tokenName="color-background-progress" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorBackgroundProgressStatusCaution} tokenName="color-background-progress" lightValue="$orange" darkValue="$orange" />
            <DocumentationToken token={Token.ColorBackgroundProgressCountdown} tokenName="color-background-progress" lightValue="none" darkValue="none" />
            <DocumentationToken token={Token.ColorBackgroundProgressCountdownStatus} tokenName="color-background-progress" lightValue="$twitch-purple-8" darkValue="$twitch-purple-9" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Pill">
            <DocumentationToken token={Token.ColorBackgroundPill} tokenName="color-background-pill" lightValue="$hinted-grey-9" darkValue="$hinted-grey-9" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Modal">
            <DocumentationToken token={Token.ColorBackgroundModalOverlay} tokenName="color-background-modal-overlay" lightValue="rgba($twitch-purple-2, 0.6)" darkValue="$opac-b-9" />
            <DocumentationToken token={Token.ColorBackgroundModal} tokenName="color-background-modal" lightValue="$white" darkValue="$twitch-purple-3" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Twitch Features">
            <DocumentationToken token={Token.ColorBackgroundSocialColumn} tokenName="color-background-social-column" lightValue="$twitch-purple-4" darkValue="$twitch-purple-4" />
            <DocumentationToken token={Token.ColorBackgroundTopNav} tokenName="color-background-top-nav" lightValue="$twitch-purple-6" darkValue="$twitch-purple-4" />
          </DocumentationTokens>
        </Layout>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <h3 id="background-tokens" className="section__heading">Text Tokens</h3>
        <Layout margin={{ top: 1, bottom: 3 }}>
          <DocumentationTokens title="Base">
            <DocumentationToken token={Token.ColorText} tokenName="color-text" lightValue="$hinted-grey-2" darkValue="$hinted-grey-15" />
            <DocumentationToken token={Token.ColorTextAlt} tokenName="color-text-alt" lightValue="$hinted-grey-4" darkValue="$hinted-grey-11" />
            <DocumentationToken token={Token.ColorTextAlt2} tokenName="color-text-alt-2" lightValue="$hinted-grey-7" darkValue="$hinted-grey-8" />
            <DocumentationToken token={Token.ColorTextLive} tokenName="color-text-live" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorTextPrime} tokenName="color-text-prime" lightValue="$prime-blue" darkValue="$prime-blue" />
            <DocumentationToken token={Token.ColorTextLink} tokenName="color-text-link" lightValue="$twitch-purple-7" darkValue="$twitch-purple-10" />
            <DocumentationToken token={Token.ColorTextLinkHover} tokenName="color-text-link-hover" lightValue="$twitch-purple-7" darkValue="$twitch-purple-10" />
            <DocumentationToken token={Token.ColorTextLinkActive} tokenName="color-text-link-active" lightValue="$twitch-purple-7" darkValue="$twitch-purple-10" />
            <DocumentationToken token={Token.ColorTextLinkVisited} tokenName="color-text-link-visited" lightValue="$twitch-purple-7" darkValue="$twitch-purple-10" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Buttons">
            <DocumentationToken token={Token.ColorTextButton} tokenName="color-text-button" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonHover} tokenName="color-text-button-hover" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonFocus} tokenName="color-text-button-focus" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonActive} tokenName="color-text-button-active" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonDisabled} tokenName="color-text-button-disabled" lightValue="$white" darkValue="$opac-w-9" />
            <DocumentationToken token={Token.ColorTextButtonSecondary} tokenName="color-text-button-secondary" lightValue="$hinted-grey-10" darkValue="$hinted-grey-10" />
            <DocumentationToken token={Token.ColorTextButtonSecondaryHover} tokenName="color-text-button-secondary-hover" lightValue="$hinted-grey-7" darkValue="$hinted-grey-12" />
            <DocumentationToken token={Token.ColorTextButtonSecondaryFocus} tokenName="color-text-button-secondary-focus" lightValue="$hinted-grey-7" darkValue="$hinted-grey-12" />
            <DocumentationToken token={Token.ColorTextButtonSecondaryActive} tokenName="color-text-button-secondary-active" lightValue="$hinted-grey-7" darkValue="$hinted-grey-12" />
            <DocumentationToken token={Token.ColorTextButtonHollow} tokenName="color-text-button-hollow" lightValue="$twitch-purple-7" darkValue="$twitch-purple-10" />
            <DocumentationToken token={Token.ColorTextButtonHollowHover} tokenName="color-text-button-hollow-hover" lightValue="$twitch-purple-4" darkValue="$twitch-purple-10" />
            <DocumentationToken token={Token.ColorTextButtonHollowFocus} tokenName="color-text-button-hollow-focus" lightValue="$twitch-purple-4" darkValue="$twitch-purple-10" />
            <DocumentationToken token={Token.ColorTextButtonHollowActive} tokenName="color-text-button-hollow-active" lightValue="$twitch-purple-4" darkValue="$twitch-purple-10" />
            <DocumentationToken token={Token.ColorTextButtonStatus} tokenName="color-text-button-status" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonStatusHover} tokenName="color-text-button-status-hover" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonStatusFocus} tokenName="color-text-button-status-focus" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonStatusActive} tokenName="color-text-button-status-active" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonSuccess} tokenName="color-text-button-success" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonSuccessHover} tokenName="color-text-button-success-hover" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonSuccessFocus} tokenName="color-text-button-success-focus" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonSuccessActive} tokenName="color-text-button-success-active" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonAlert} tokenName="color-text-button-alert" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonAlertHover} tokenName="color-text-button-alert-hover" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonAlertFocus} tokenName="color-text-button-alert-focus" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextButtonAlertActive} tokenName="color-text-button-alert-active" lightValue="$white" darkValue="$white" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Interactable">
            <DocumentationToken token={Token.ColorTextInteractable} tokenName="color-text-interactable" lightValue="'currentColor'" darkValue="'currentColor'" />
            <DocumentationToken token={Token.ColorTextInteractableHover} tokenName="color-text-interactable-hover" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextInteractableFocus} tokenName="color-text-interactable-focus" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextInteractableActive} tokenName="color-text-interactable-active" lightValue="'currentColor'" darkValue="'currentColor'" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Inputs & Toggle">
            <DocumentationToken token={Token.ColorTextInput} tokenName="color-text-input" lightValue="$hinted-grey-5" darkValue="$hinted-grey-15" />
            <DocumentationToken token={Token.ColorTextInputPlaceholder} tokenName="color-text-input-placeholder" lightValue="$hinted-grey-9" darkValue="$hinted-grey-8" />
            <DocumentationToken token={Token.ColorTextInputCheckedIcon} tokenName="color-text-input-checked-icon" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextLabel} tokenName="color-text-label" lightValue="$hinted-grey-2" darkValue="$hinted-grey-15" />
            <DocumentationToken token={Token.ColorTextLabelOptional} tokenName="color-text-label-optional" lightValue="$hinted-grey-7" darkValue="$hinted-grey-8" />
            <DocumentationToken token={Token.ColorTextHint} tokenName="color-text-hint" lightValue="$hinted-grey-7" darkValue="$hinted-grey-8" />
            <DocumentationToken token={Token.ColorTextToggleCheckedIcon} tokenName="color-text-toggle-checked-icon" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextError} tokenName="color-text-error" lightValue="$red" darkValue="$red" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Balloon">
            <DocumentationToken token={Token.ColorTextBalloonTitle} tokenName="color-text-balloon-title" lightValue="$hinted-grey-7" darkValue="$hinted-grey-8" />
            <DocumentationToken token={Token.ColorTextBalloonLink} tokenName="color-text-balloon-link" lightValue="$twitch-purple-7" darkValue="$hinted-grey-15" />
            <DocumentationToken token={Token.ColorTextBalloonLinkHover} tokenName="color-text-balloon-link-hover" lightValue="$white" darkValue="$hinted-grey-15" />
            <DocumentationToken token={Token.ColorTextBalloonLinkDisabled} tokenName="color-text-balloon-link-disabled" lightValue="$hinted-grey-9" darkValue="$hinted-grey-6" />
            <DocumentationToken token={Token.ColorTextBalloonLinkAlert} tokenName="color-text-balloon-link-alert" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorTextBalloonTooltip} tokenName="color-text-balloon-tooltip" lightValue="$twitch-purple-6" darkValue="$twitch-purple-1" />
            <DocumentationToken token={Token.ColorTextBalloonPurple} tokenName="color-text-balloon-purple" lightValue="$white" darkValue="$white" />
            <DocumentationToken token={Token.ColorTextBalloonAlert} tokenName="color-text-balloon-alert" lightValue="$white" darkValue="$white" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Overlay">
            <DocumentationToken token={Token.ColorTextOverlay} tokenName="color-text-overlay" lightValue="$hinted-grey-15" darkValue="$hinted-grey-15" />
            <DocumentationToken token={Token.ColorTextOverlayAlt} tokenName="color-text-overlay-alt" lightValue="$twitch-purple-10" darkValue="$twitch-purple-10" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Pill">
            <DocumentationToken token={Token.ColorTextPill} tokenName="color-text-pill" lightValue="$white" darkValue="$white" />
          </DocumentationTokens>
        </Layout>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <h3 id="background-tokens" className="`sec`tion__heading">Border Tokens</h3>
        <Layout margin={{ top: 1, bottom: 3 }}>
          <DocumentationTokens title="Base">
            <DocumentationToken token={Token.ColorBorder} tokenName="color-border" lightValue="$hinted-grey-12" darkValue="$twitch-purple-5" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Tabs">
            <DocumentationToken token={Token.ColorBorderTab} tokenName="color-border-tab" lightValue="$hinted-grey-12" darkValue="$twitch-purple-5" />
            <DocumentationToken token={Token.ColorBorderTabHover} tokenName="color-border-tab-hover" lightValue="$twitch-purple-7" darkValue="$twitch-purple-7" />
            <DocumentationToken token={Token.ColorBorderTabFocus} tokenName="color-border-tab-focus" lightValue="$twitch-purple-7" darkValue="$twitch-purple-7" />
            <DocumentationToken token={Token.ColorBorderTabActive} tokenName="color-border-tab-active" lightValue="$twitch-purple-7" darkValue="$twitch-purple-7" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Buttons">
            <DocumentationToken token={Token.ColorBorderButton} tokenName="color-border-button" lightValue="$twitch-purple-7" darkValue="$twitch-purple-7," />
            <DocumentationToken token={Token.ColorBorderButtonHover} tokenName="color-border-button-hover" lightValue="$twitch-purple-8" darkValue="$twitch-purple-8," />
            <DocumentationToken token={Token.ColorBorderButtonFocus} tokenName="color-border-button-focus" lightValue="$twitch-purple-9" darkValue="$twitch-purple-9," />
            <DocumentationToken token={Token.ColorBorderButtonActive} tokenName="color-border-button-active" lightValue="$twitch-purple-8" darkValue="$twitch-purple-8," />
            <DocumentationToken token={Token.ColorBorderButtonDisabled} tokenName="color-border-button-disabled" lightValue="$hinted-grey-12" darkValue="$opac-p-7" />
            <DocumentationToken token={Token.ColorBorderButtonHollow} tokenName="color-border-button-hollow" lightValue="$twitch-purple-10" darkValue="$twitch-purple-6" />
            <DocumentationToken token={Token.ColorBorderButtonHollowHover} tokenName="color-border-button-hollow-hover" lightValue="$opac-p-8" darkValue="$opac-p-7" />
            <DocumentationToken token={Token.ColorBorderButtonHollowFocus} tokenName="color-border-button-hollow-focus" lightValue="$opac-p-8" darkValue="$opac-p-7" />
            <DocumentationToken token={Token.ColorBorderButtonHollowActive} tokenName="color-border-button-hollow-active" lightValue="$opac-p-9" darkValue="$opac-p-8" />
            <DocumentationToken token={Token.ColorBorderButtonStatus} tokenName="color-border-button-status" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorBorderButtonStatusHover} tokenName="color-border-button-status-hover" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorBorderButtonStatusFocus} tokenName="color-border-button-status-focus" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorBorderButtonStatusActive} tokenName="color-border-button-status-active" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorBorderButtonSuccess} tokenName="color-border-button-success" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorBorderButtonSuccessHover} tokenName="color-border-button-success-hover" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorBorderButtonSuccessFocus} tokenName="color-border-button-success-focus" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorBorderButtonSuccessActive} tokenName="color-border-button-success-active" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorBorderButtonAlert} tokenName="color-border-button-error" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorBorderButtonAlertHover} tokenName="color-border-button-error-hover" lightValue="darken($red, 10%)" darkValue="darken($red, 15%)" />
            <DocumentationToken token={Token.ColorBorderButtonAlertFocus} tokenName="color-border-button-error-focus" lightValue="darken($red, 10%)" darkValue="darken($red, 15%)" />
            <DocumentationToken token={Token.ColorBorderButtonAlertActive} tokenName="color-border-button-error-active" lightValue="darken($red, 10%)" darkValue="$red" />
          </DocumentationTokens>
        </Layout>

        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Inputs & Toggle">
            <DocumentationToken token={Token.ColorBorderInput} tokenName="color-border-input" lightValue="$hinted-grey-12" darkValue="$twitch-purple-5" />
            <DocumentationToken token={Token.ColorBorderInputFocus} tokenName="color-border-input-focus" lightValue="$twitch-purple-8" darkValue="$twitch-purple-8" />
            <DocumentationToken token={Token.ColorBorderInputChecked} tokenName="color-border-input-checked" lightValue="$twitch-purple-8" darkValue="$twitch-purple-8" />
            <DocumentationToken token={Token.ColorBorderInputError} tokenName="color-border-input-error" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorBorderToggle} tokenName="color-border-toggle" lightValue="transparent" darkValue="transparent" />
            <DocumentationToken token={Token.ColorBorderToggleHover} tokenName="color-border-toggle-hover" lightValue="$twitch-purple-10" darkValue="$twitch-purple-8" />
            <DocumentationToken token={Token.ColorBorderToggleFocus} tokenName="color-border-toggle-focus" lightValue="$twitch-purple-10" darkValue="$twitch-purple-8" />
          </DocumentationTokens>
        </Layout>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <h3 id="background-tokens" className="section__heading">Fill Tokens</h3>
        <Layout margin={{ top: 1, bottom: 3 }}>
          <DocumentationTokens>
            <DocumentationToken token={Token.ColorFill} tokenName="color-fill" lightValue="$hinted-grey-2" darkValue="$hinted-grey-15" />
            <DocumentationToken token={Token.ColorFillCurrent} tokenName="color-fill-current" lightValue="'currentColor'" darkValue="'currentColor'" />
            <DocumentationToken token={Token.ColorFillAlt} tokenName="color-fill-alt" lightValue="$hinted-grey-4" darkValue="$hinted-grey-11" />
            <DocumentationToken token={Token.ColorFillAlt2} tokenName="color-fill-alt-2" lightValue="$hinted-grey-7" darkValue="$hinted-grey-8" />
            <DocumentationToken token={Token.ColorFillBrand} tokenName="color-fill-brand" lightValue="twitch-purple-7" darkValue="$twitch-purple-10" />
            <DocumentationToken token={Token.ColorFillLive} tokenName="color-fill-live" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorFillWarn} tokenName="color-fill-warn" lightValue="$yellow" darkValue="$yellow" />
            <DocumentationToken token={Token.ColorFillAlert} tokenName="color-fill-alert" lightValue="$red" darkValue="$red" />
            <DocumentationToken token={Token.ColorFillSuccess} tokenName="color-fill-success" lightValue="$green" darkValue="$green" />
            <DocumentationToken token={Token.ColorFillPrime} tokenName="color-fill-prime" lightValue="$prime-blue" darkValue="$prime-blue" />
          </DocumentationTokens>
        </Layout>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <h3 id="background-tokens" className="section__heading">Social Media Color Tokens</h3>
        <Layout margin={{ top: 1, bottom: 3 }}>
          <DocumentationTokens>
            <DocumentationToken token={Token.ColorSocialTwitter} tokenName="color-social-twitter" lightValue="$color-twitter" darkValue="$color-twitter" />
            <DocumentationToken token={Token.ColorSocialFacebook} tokenName="color-social-facebook" lightValue="$color-facebook" darkValue="$color-facebook" />
            <DocumentationToken token={Token.ColorSocialReddit} tokenName="color-social-reddit" lightValue="$color-reddit" darkValue="$color-reddit" />
            <DocumentationToken token={Token.ColorSocialSnapchat} tokenName="color-social-snapchat" lightValue="$color-snapchat" darkValue="$color-snapchat" />
            <DocumentationToken token={Token.ColorSocialInstagram} tokenName="color-social-instagram" lightValue="$color-instagram" darkValue="$color-instagram" />
            <DocumentationToken token={Token.ColorSocialYoutube} tokenName="color-social-youtube" lightValue="$color-youtube" darkValue="$color-youtube" />
            <DocumentationToken token={Token.ColorSocialPaypal} tokenName="color-social-paypal" lightValue="$color-paypal" darkValue="$color-paypal" />
            <DocumentationToken token={Token.ColorSocialVk} tokenName="color-social-vk" lightValue="$color-vk" darkValue="$color-vk" />
          </DocumentationTokens>
        </Layout>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <h3 id="background-tokens" className="section__heading">Shadow Tokens</h3>
        <Layout margin={{ top: 1, bottom: 3 }}>
          <DocumentationTokens title="Buttons">
            <DocumentationToken token={Token.ShadowButtonFocus} tokenName="shadow-button-focus" lightValue="0 0 6px 0 $twitch-purple-8" darkValue="0 0 6px 0 $twitch-purple-8" />
            <DocumentationToken token={Token.ShadowButtonActive} tokenName="shadow-button-active" lightValue="0 0 6px 0 $twitch-purple-8" darkValue="0 0 6px 0 $twitch-purple-8" />
            <DocumentationToken token={Token.ShadowButtonDisabled} tokenName="shadow-button-disabled" lightValue="none" darkValue="none" />
          </DocumentationTokens>
        </Layout>
        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Tabs">
            <DocumentationToken token={Token.ShadowTabFocus} tokenName="shadow-tab-focus" lightValue="0 4px 6px -4px $twitch-purple-8" darkValue=" 0 4px 6px -4px $twitch-purple-8" />
          </DocumentationTokens>
        </Layout>
        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Inputs">
            <DocumentationToken token={Token.ShadowInput} tokenName="shadow-input-focus" lightValue="inset 0 0 0 1px $hinted-grey-12" darkValue="inset 0 0 0 1px $twitch-purple-5" />
            <DocumentationToken token={Token.ShadowInputFocus} tokenName="shadow-input-focus" lightValue="0 0 6px -2px $twitch-purple-8" darkValue="0 0 6px -2px $twitch-purple-8" />
          </DocumentationTokens>
        </Layout>
        <Layout margin={{ bottom: 3 }}>
          <DocumentationTokens title="Balloon">
            <DocumentationToken token={Token.ShadowBalloon} tokenName="shadow-balloon-focus" lightValue="0 1px 1px $opac-b-5" darkValue="0 1px 1px $opac-b-5" />
          </DocumentationTokens>
        </Layout>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <h3 id="background-tokens" className="section__heading">Other Tokens</h3>
        <Layout margin={{ top: 1, bottom: 3 }}>
          <DocumentationTokens title="Border Settings">
            <DocumentationToken token={Token.BorderWidth} tokenName="border-width" lightValue="1px" darkValue="1px" />
            <DocumentationToken token={Token.BorderRadius} tokenName="border-radius" lightValue="1px" darkValue="1px" />
          </DocumentationTokens>
        </Layout>
      </Layout>
    </div>
  );
// tslint:disable-next-line:max-file-line-count
};

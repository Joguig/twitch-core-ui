import * as React from 'react';
import { Avatar } from '../../../../components/avatar';
import { DocumentationComponent } from '../../../components/documentation/documentation-component';
import { DocumentationMarkup } from '../../../components/documentation/documentation-markup';
import { DocumentationProp } from '../../../components/documentation/documentation-prop';
import { DocumentationProps } from '../../../components/documentation/documentation-props';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const AvatarPage = () => {
    return (
      <div className="avatar-page full-width">
        <PageHeader
          title="Avatar"
          description="This component is part of the Core UI pattern library and displays an avatar element."
          updateDate="June 8, 2017"
        />
        <DocumentationProps>
          <DocumentationProp
            property="imageAlt"
            type="string"
            default="none"
            description="Indicates text describing the image to be displayed to users in the event that image is unavailable."
          />
          <DocumentationProp
            property="imageSrc"
            type="string"
            default="none"
            description="Indicates the URL of the avatar image."
          />
          <DocumentationProp
            property="size"
            type="AvatarSize"
            default="none"
            description="Indicates the size of the avatar. The options are: 30, 36, 40, 50, 96, and 300"
          />
        </DocumentationProps>
        <DocumentationMarkup>
{`<Avatar
  imageSrc="//s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-avatar-160x160.png"
  imageAlt="User profile picture"
  size={40}
/>`}
        </DocumentationMarkup>
        <DocumentationComponent>
          <Avatar
            imageSrc="//s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-avatar-160x160.png"
            imageAlt="User profile picture"
            size={30}
          />
          <Avatar
            imageSrc="//s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-avatar-160x160.png"
            imageAlt="User profile picture"
            size={36}
          />
          <Avatar
            imageSrc="//s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-avatar-160x160.png"
            imageAlt="User profile picture"
            size={40}
          />
          <Avatar
            imageSrc="//s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-avatar-160x160.png"
            imageAlt="User profile picture"
            size={50}
          />
          <Avatar
            imageSrc="//s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-avatar-160x160.png"
            imageAlt="User profile picture"
            size={96}
          />
          <Avatar
            imageSrc="//s3-us-west-2.amazonaws.com/web-design-int-production/assets/ui/images/tmp-avatar-160x160.png"
            imageAlt="User profile picture"
            size={300}
          />
        </DocumentationComponent>
      </div>
    );
};

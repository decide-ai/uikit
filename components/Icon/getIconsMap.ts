import * as Icons from "./index";
import { IconProps, IconListItem } from "./types";

export const getIconsMap = (props: IconProps = {}): IconListItem[] => ([
  // Social
  { group: 'Social', name: 'FacebookLogoIcon', component: Icons.FacebookLogoIcon },
  { group: 'Social', name: 'FacebookInCircleLogoIcon', component: Icons.FacebookInCircleLogoIcon },
  { group: 'Social', name: 'InstagramLogoIcon', component: Icons.InstagramLogoIcon },
  { group: 'Social', name: 'TelegramLogoIcon', component: Icons.TelegramLogoIcon },
  { group: 'Social', name: 'LinkedinLogoIcon', component: Icons.LinkedinLogoIcon },
  { group: 'Social', name: 'MediumLogoIcon', component: Icons.MediumLogoIcon },
  { group: 'Social', name: 'MetaLogoIcon', component: Icons.MetaLogoIcon },
  { group: 'Social', name: 'SnapchatLogoIcon', component: Icons.SnapchatLogoIcon },
  { group: 'Social', name: 'TiktokLogoIcon', component: Icons.TiktokLogoIcon },
  { group: 'Social', name: 'TwitterLogoIcon', component: Icons.TwitterLogoIcon },
  { group: 'Social', name: 'XLogoIcon', component: Icons.XLogoIcon },
  { group: 'Social', name: 'YoutubeLogoIcon', component: Icons.YoutubeLogoIcon },
  { group: 'Social', name: 'DiscordLogoIcon', component: Icons.DiscordLogoIcon },

  // Arrow
  { group: 'Arrow', name: 'AltArrowDownIcon', component: Icons.AltArrowDownIcon },
  { group: 'Arrow', name: 'AltArrowLeftIcon', component: Icons.AltArrowLeftIcon },
  { group: 'Arrow', name: 'AltArrowRightIcon', component: Icons.AltArrowRightIcon },
  { group: 'Arrow', name: 'AltArrowUpIcon', component: Icons.AltArrowUpIcon },
  { group: 'Arrow', name: 'ArrowDownIcon', component: Icons.ArrowDownIcon },
  { group: 'Arrow', name: 'ArrowLeftDownIcon', component: Icons.ArrowLeftDownIcon },
  { group: 'Arrow', name: 'ArrowLeftIcon', component: Icons.ArrowLeftIcon },
  { group: 'Arrow', name: 'ArrowLeftUpIcon', component: Icons.ArrowLeftUpIcon },
  { group: 'Arrow', name: 'ArrowRightDownIcon', component: Icons.ArrowRightDownIcon },
  { group: 'Arrow', name: 'ArrowRightIcon', component: Icons.ArrowRightIcon },
  { group: 'Arrow', name: 'ArrowRightUpIcon', component: Icons.ArrowRightUpIcon },
  { group: 'Arrow', name: 'ArrowUpIcon', component: Icons.ArrowUpIcon },
  { group: 'Arrow', name: 'DoubleAltArrowDownIcon', component: Icons.DoubleAltArrowDownIcon },
  { group: 'Arrow', name: 'DoubleAltArrowLeftIcon', component: Icons.DoubleAltArrowLeftIcon },
  { group: 'Arrow', name: 'DoubleAltArrowRightIcon', component: Icons.DoubleAltArrowRightIcon },
  { group: 'Arrow', name: 'DoubleAltArrowUpIcon', component: Icons.DoubleAltArrowUpIcon },
  { group: 'Arrow', name: 'RestartCircleIcon', component: Icons.RestartCircleIcon },
  { group: 'Arrow', name: 'RestartIcon', component: Icons.RestartIcon },
  { group: 'Arrow', name: 'RestartSquareIcon', component: Icons.RestartSquareIcon },
  { group: 'Arrow', name: 'RoundAltArrowDownIcon', component: Icons.RoundAltArrowDownIcon },
  { group: 'Arrow', name: 'RoundAltArrowLeftIcon', component: Icons.RoundAltArrowLeftIcon },
  { group: 'Arrow', name: 'RoundAltArrowRightIcon', component: Icons.RoundAltArrowRightIcon },
  { group: 'Arrow', name: 'RoundAltArrowUpIcon', component: Icons.RoundAltArrowUpIcon },
  { group: 'Arrow', name: 'RoundArrowDownIcon', component: Icons.RoundArrowDownIcon },
  { group: 'Arrow', name: 'RoundArrowLeftDownIcon', component: Icons.RoundArrowLeftDownIcon },
  { group: 'Arrow', name: 'RoundArrowLeftIcon', component: Icons.RoundArrowLeftIcon },
  { group: 'Arrow', name: 'RoundArrowLeftUpIcon', component: Icons.RoundArrowLeftUpIcon },
  { group: 'Arrow', name: 'RoundArrowRightDownIcon', component: Icons.RoundArrowRightDownIcon },
  { group: 'Arrow', name: 'RoundArrowRightIcon', component: Icons.RoundArrowRightIcon },
  { group: 'Arrow', name: 'RoundArrowRightUpIcon', component: Icons.RoundArrowRightUpIcon },
  { group: 'Arrow', name: 'RoundArrowUpIcon', component: Icons.RoundArrowUpIcon },
  { group: 'Arrow', name: 'RoundDoubleAltArrowDownIcon', component: Icons.RoundDoubleAltArrowDownIcon },
  { group: 'Arrow', name: 'RoundDoubleAltArrowLeftIcon', component: Icons.RoundDoubleAltArrowLeftIcon },
  { group: 'Arrow', name: 'RoundDoubleAltArrowRightIcon', component: Icons.RoundDoubleAltArrowRightIcon },
  { group: 'Arrow', name: 'RoundDoubleAltArrowUpIcon', component: Icons.RoundDoubleAltArrowUpIcon },
  { group: 'Arrow', name: 'RoundSortHorizontalIcon', component: Icons.RoundSortHorizontalIcon },
  { group: 'Arrow', name: 'RoundSortVerticalIcon', component: Icons.RoundSortVerticalIcon },
  { group: 'Arrow', name: 'RoundTransferDiagonalIcon', component: Icons.RoundTransferDiagonalIcon },
  { group: 'Arrow', name: 'RoundTransferHorizontalIcon', component: Icons.RoundTransferHorizontalIcon },
  { group: 'Arrow', name: 'RoundTransferVerticalIcon', component: Icons.RoundTransferVerticalIcon },
  { group: 'Arrow', name: 'SortHorizontalIcon', component: Icons.SortHorizontalIcon },
  { group: 'Arrow', name: 'SortVerticalIcon', component: Icons.SortVerticalIcon },
  { group: 'Arrow', name: 'SquareAltArrowDownIcon', component: Icons.SquareAltArrowDownIcon },
  { group: 'Arrow', name: 'SquareAltArrowLeftIcon', component: Icons.SquareAltArrowLeftIcon },
  { group: 'Arrow', name: 'SquareAltArrowRightIcon', component: Icons.SquareAltArrowRightIcon },
  { group: 'Arrow', name: 'SquareAltArrowUpIcon', component: Icons.SquareAltArrowUpIcon },
  { group: 'Arrow', name: 'SquareArrowDownIcon', component: Icons.SquareArrowDownIcon },
  { group: 'Arrow', name: 'SquareArrowLeftDownIcon', component: Icons.SquareArrowLeftDownIcon },
  { group: 'Arrow', name: 'SquareArrowLeftIcon', component: Icons.SquareArrowLeftIcon },
  { group: 'Arrow', name: 'SquareArrowLeftUpIcon', component: Icons.SquareArrowLeftUpIcon },
  { group: 'Arrow', name: 'SquareArrowRightDownIcon', component: Icons.SquareArrowRightDownIcon },
  { group: 'Arrow', name: 'SquareArrowRightIcon', component: Icons.SquareArrowRightIcon },
  { group: 'Arrow', name: 'SquareArrowRightUpIcon', component: Icons.SquareArrowRightUpIcon },
  { group: 'Arrow', name: 'SquareArrowUpIcon', component: Icons.SquareArrowUpIcon },
  { group: 'Arrow', name: 'SquareDoubleAltArrowDownIcon', component: Icons.SquareDoubleAltArrowDownIcon },
  { group: 'Arrow', name: 'SquareDoubleAltArrowLeftIcon', component: Icons.SquareDoubleAltArrowLeftIcon },
  { group: 'Arrow', name: 'SquareDoubleAltArrowRightIcon', component: Icons.SquareDoubleAltArrowRightIcon },
  { group: 'Arrow', name: 'SquareDoubleAltArrowUpIcon', component: Icons.SquareDoubleAltArrowUpIcon },
  { group: 'Arrow', name: 'SquareSortHorizontalIcon', component: Icons.SquareSortHorizontalIcon },
  { group: 'Arrow', name: 'SquareSortVerticalIcon', component: Icons.SquareSortVerticalIcon },
  { group: 'Arrow', name: 'SquareTransferHorizontalIcon', component: Icons.SquareTransferHorizontalIcon },
  { group: 'Arrow', name: 'SquareTransferVerticalIcon', component: Icons.SquareTransferVerticalIcon },
  { group: 'Arrow', name: 'TransferHorizontalIcon', component: Icons.TransferHorizontalIcon },
  { group: 'Arrow', name: 'TransferVerticalIcon', component: Icons.TransferVerticalIcon },
      
//   // Arrow Action
  { group: "ArrowAction", name: 'ArrowToDownLeftIcon', component: Icons.ArrowToDownLeftIcon },
  { group: "ArrowAction", name: 'ArrowToDownRightIcon', component: Icons.ArrowToDownRightIcon },
  { group: "ArrowAction", name: 'ArrowToTopLeftIcon', component: Icons.ArrowToTopLeftIcon },
  { group: "ArrowAction", name: 'ArrowToTopRightIcon', component: Icons.ArrowToTopRightIcon },
  { group: "ArrowAction", name: 'CircleBottomDownIcon', component: Icons.CircleBottomDownIcon },
  { group: "ArrowAction", name: 'CircleBottomUpIcon', component: Icons.CircleBottomUpIcon },
  { group: "ArrowAction", name: 'CircleTopDownIcon', component: Icons.CircleTopDownIcon },
  { group: "ArrowAction", name: 'CircleTopUpIcon', component: Icons.CircleTopUpIcon },
  { group: "ArrowAction", name: 'DownloadMinimalisticIcon', component: Icons.DownloadMinimalisticIcon },
  { group: "ArrowAction", name: 'DownloadSquareIcon', component: Icons.DownloadSquareIcon },
  { group: "ArrowAction", name: 'DownloadTwiceSquareIcon', component: Icons.DownloadTwiceSquareIcon },
  { group: "ArrowAction", name: 'DownloadIcon', component: Icons.DownloadIcon },
  { group: "ArrowAction", name: 'ExitIcon', component: Icons.ExitIcon },
  { group: "ArrowAction", name: 'ExportIcon', component: Icons.ExportIcon },
  { group: "ArrowAction", name: 'ForwardArrowIcon', component: Icons.ForwardArrowIcon },
  { group: "ArrowAction", name: 'ForwardV2Icon', component: Icons.ForwardV2Icon },
  { group: "ArrowAction", name: 'ImportIcon', component: Icons.ImportIcon },
  { group: "ArrowAction", name: 'LoginV2Icon', component: Icons.LoginV2Icon },
  { group: "ArrowAction", name: 'LoginV3Icon', component: Icons.LoginV3Icon },
  { group: "ArrowAction", name: 'LoginIcon', component: Icons.LoginIcon },
  { group: "ArrowAction", name: 'LogoutV2Icon', component: Icons.LogoutV2Icon },
  { group: "ArrowAction", name: 'LogoutV3Icon', component: Icons.LogoutV3Icon },
  { group: "ArrowAction", name: 'LogoutIcon', component: Icons.LogoutIcon },
  { group: "ArrowAction", name: 'MaximizeSquareV2Icon', component: Icons.MaximizeSquareV2Icon },
  { group: "ArrowAction", name: 'MaximizeSquareV3Icon', component: Icons.MaximizeSquareV3Icon },
  { group: "ArrowAction", name: 'MaximizeSquareMinimalisticIcon', component: Icons.MaximizeSquareMinimalisticIcon },
  { group: "ArrowAction", name: 'MaximizeSquareIcon', component: Icons.MaximizeSquareIcon },
  { group: "ArrowAction", name: 'MaximizeIcon', component: Icons.MaximizeIcon },
  { group: "ArrowAction", name: 'MinimizeSquareV2Icon', component: Icons.MinimizeSquareV2Icon },
  { group: "ArrowAction", name: 'MinimizeSquareV3Icon', component: Icons.MinimizeSquareV3Icon },
  { group: "ArrowAction", name: 'MinimizeSquareMinimalisticIcon', component: Icons.MinimizeSquareMinimalisticIcon },
  { group: "ArrowAction", name: 'MinimizeSquareIcon', component: Icons.MinimizeSquareIcon },
  { group: "ArrowAction", name: 'MinimizeIcon', component: Icons.MinimizeIcon },
  { group: "ArrowAction", name: 'ReciveSquareIcon', component: Icons.ReciveSquareIcon },
  { group: "ArrowAction", name: 'ReciveTwiceSquareIcon', component: Icons.ReciveTwiceSquareIcon },
  { group: "ArrowAction", name: 'ReorderArrowIcon', component: Icons.ReorderArrowIcon },
  { group: "ArrowAction", name: 'ReplyV2Icon', component: Icons.ReplyV2Icon },
  { group: "ArrowAction", name: 'ReplyIcon', component: Icons.ReplyIcon },
  { group: "ArrowAction", name: 'ScaleIcon', component: Icons.ScaleIcon },
  { group: "ArrowAction", name: 'ScreenShareIcon', component: Icons.ScreenShareIcon },
  { group: "ArrowAction", name: 'SendSquareIcon', component: Icons.SendSquareIcon },
  { group: "ArrowAction", name: 'SendTwiceSquareIcon', component: Icons.SendTwiceSquareIcon },
  { group: "ArrowAction", name: 'SquareBottomDownIcon', component: Icons.SquareBottomDownIcon },
  { group: "ArrowAction", name: 'SquareBottomUpIcon', component: Icons.SquareBottomUpIcon },
  { group: "ArrowAction", name: 'SquareTopDownIcon', component: Icons.SquareTopDownIcon },
  { group: "ArrowAction", name: 'SquareTopUpIcon', component: Icons.SquareTopUpIcon },
  { group: "ArrowAction", name: 'UndoLeftRoundSquareIcon', component: Icons.UndoLeftRoundSquareIcon },
  { group: "ArrowAction", name: 'UndoLeftRoundIcon', component: Icons.UndoLeftRoundIcon },
  { group: "ArrowAction", name: 'UndoLeftSquareIcon', component: Icons.UndoLeftSquareIcon },
  { group: "ArrowAction", name: 'UndoLeftIcon', component: Icons.UndoLeftIcon },
  { group: "ArrowAction", name: 'UndoRightRoundSquareIcon', component: Icons.UndoRightRoundSquareIcon },
  { group: "ArrowAction", name: 'UndoRightRoundIcon', component: Icons.UndoRightRoundIcon },
  { group: "ArrowAction", name: 'UndoRightSquareIcon', component: Icons.UndoRightSquareIcon },
  { group: "ArrowAction", name: 'UndoRightIcon', component: Icons.UndoRightIcon },
  { group: "ArrowAction", name: 'UploadMinimalisticIcon', component: Icons.UploadMinimalisticIcon },
  { group: "ArrowAction", name: 'UploadSquareIcon', component: Icons.UploadSquareIcon },
  { group: "ArrowAction", name: 'UploadTwiceSquareIcon', component: Icons.UploadTwiceSquareIcon },
  { group: "ArrowAction", name: 'UploadIcon', component: Icons.UploadIcon },
      
//   // Business & Statistic
  { group:'BusinessStatistic', name: 'ChartV2Icon', component: Icons.ChartV2Icon },
  { group:'BusinessStatistic', name: 'ChartIcon', component: Icons.ChartIcon },
  { group:'BusinessStatistic', name: 'ChartSquareIcon', component: Icons.ChartSquareIcon },
  { group:'BusinessStatistic', name: 'ChartSquareV2Icon', component: Icons.ChartSquareV2Icon },
  { group:'BusinessStatistic', name: 'CourseDownIcon', component: Icons.CourseDownIcon },
  { group:'BusinessStatistic', name: 'CourseUpIcon', component: Icons.CourseUpIcon },
  { group:'BusinessStatistic', name: 'DiagramDownIcon', component: Icons.DiagramDownIcon },
  { group:'BusinessStatistic', name: 'DiagramUpIcon', component: Icons.DiagramUpIcon },
  { group:'BusinessStatistic', name: 'GraphDownIcon', component: Icons.GraphDownIcon },
  { group:'BusinessStatistic', name: 'GraphUpIcon', component: Icons.GraphUpIcon },
  { group:'BusinessStatistic', name: 'GraphIcon', component: Icons.GraphIcon },
  { group:'BusinessStatistic', name: 'PieChartV2Icon', component: Icons.PieChartV2Icon },
  { group:'BusinessStatistic', name: 'PieChartV3Icon', component: Icons.PieChartV3Icon },
  { group:'BusinessStatistic', name: 'PieChartIcon', component: Icons.PieChartIcon },
  { group:'BusinessStatistic', name: 'PresentationGraphIcon', component: Icons.PresentationGraphIcon },
  { group:'BusinessStatistic', name: 'RoundGraphIcon', component: Icons.RoundGraphIcon },
      
//   // Design Tools 
  { group: "DesignTools", name: 'AlignBottomIcon', component: Icons.AlignBottomIcon },
  { group: "DesignTools", name: 'AlignHorizontalSpacingIcon', component: Icons.AlignHorizontalSpacingIcon },
  { group: "DesignTools", name: 'AlignHorizontalCenterIcon', component: Icons.AlignHorizontalCenterIcon },
  { group: "DesignTools", name: 'AlignLeftIcon', component: Icons.AlignLeftIcon },
  { group: "DesignTools", name: 'AlignRightIcon', component: Icons.AlignRightIcon },
  { group: "DesignTools", name: 'AlignTopIcon', component: Icons.AlignTopIcon },
  { group: "DesignTools", name: 'AlignVerticalCenterIcon', component: Icons.AlignVerticalCenterIcon },
  { group: "DesignTools", name: 'AlignVerticalSpacingIcon', component: Icons.AlignVerticalSpacingIcon },
  { group: "DesignTools", name: 'ColourTuneingIcon', component: Icons.ColourTuneingIcon },
  { group: "DesignTools", name: 'CropIcon', component: Icons.CropIcon },
  { group: "DesignTools", name: 'FlipHorizontalIcon', component: Icons.FlipHorizontalIcon },
  { group: "DesignTools", name: 'FlipVerticalIcon', component: Icons.FlipVerticalIcon },
  { group: "DesignTools", name: 'LayersIcon', component: Icons.LayersIcon },
  { group: "DesignTools", name: 'MirrorLeftIcon', component: Icons.MirrorLeftIcon },
  { group: "DesignTools", name: 'MirrorRightIcon', component: Icons.MirrorRightIcon },
  { group: "DesignTools", name: 'RadialBlurIcon', component: Icons.RadialBlurIcon },
  { group: "DesignTools", name: 'RulerAngularIcon', component: Icons.RulerAngularIcon },
  { group: "DesignTools", name: 'RulerPenIcon', component: Icons.RulerPenIcon },
  { group: "DesignTools", name: 'RulerIcon', component: Icons.RulerIcon },
  { group: "DesignTools", name: 'ThreeSquaresIcon', component: Icons.ThreeSquaresIcon },
      
//   // EssentionalUI
  { group: 'EssentionalUI', name: 'AddCircleIcon', component: Icons.AddCircleIcon },
  { group: 'EssentionalUI', name: 'AddSquareIcon', component: Icons.AddSquareIcon },
  { group: 'EssentionalUI', name: 'BoltCircleIcon', component: Icons.BoltCircleIcon },
  { group: 'EssentionalUI', name: 'BoltIcon', component: Icons.BoltIcon },
  { group: 'EssentionalUI', name: 'BoxMinimalisticIcon', component: Icons.BoxMinimalisticIcon },
  { group: 'EssentionalUI', name: 'BoxIcon', component: Icons.BoxIcon },
  { group: 'EssentionalUI', name: 'CheckCircleIcon', component: Icons.CheckCircleIcon },
  { group: 'EssentionalUI', name: 'CheckSquareIcon', component: Icons.CheckSquareIcon },
  { group: 'EssentionalUI', name: 'CloseCircleIcon', component: Icons.CloseCircleIcon },
  { group: 'EssentionalUI', name: 'CloseSquareIcon', component: Icons.CloseSquareIcon },
  { group: 'EssentionalUI', name: 'CrossIcon', component: Icons.CrossIcon },
  { group: 'EssentionalUI', name: 'CopyIcon', component: Icons.CopyIcon },
  { group: 'EssentionalUI', name: 'CrownMinimalisticIcon', component: Icons.CrownMinimalisticIcon },
  { group: 'EssentionalUI', name: 'CrownStarIcon', component: Icons.CrownStarIcon },
  { group: 'EssentionalUI', name: 'CursorIcon', component: Icons.CursorIcon },
  { group: 'EssentionalUI', name: 'DatabaseIcon', component: Icons.DatabaseIcon },
  { group: 'EssentionalUI', name: 'FeedIcon', component: Icons.FeedIcon },
  { group: 'EssentionalUI', name: 'FlagV2Icon', component: Icons.FlagV2Icon },
  { group: 'EssentionalUI', name: 'FlagIcon', component: Icons.FlagIcon },
  { group: 'EssentionalUI', name: 'ForbiddenCircleIcon', component: Icons.ForbiddenCircleIcon },
  { group: 'EssentionalUI', name: 'ForbiddenIcon', component: Icons.ForbiddenIcon },
  { group: 'EssentionalUI', name: 'GiftIcon', component: Icons.GiftIcon },
  { group: 'EssentionalUI', name: 'HamburgerMenuIcon', component: Icons.HamburgerMenuIcon },
  { group: 'EssentionalUI', name: 'HomeV2Icon', component: Icons.HomeV2Icon },
  { group: 'EssentionalUI', name: 'HomeAddIcon', component: Icons.HomeAddIcon },
  { group: 'EssentionalUI', name: 'HomeSmileIcon', component: Icons.HomeSmileIcon },
  { group: 'EssentionalUI', name: 'HomeIcon', component: Icons.HomeIcon },
  { group: 'EssentionalUI', name: 'MagnetIcon', component: Icons.MagnetIcon },
  { group: 'EssentionalUI', name: 'MentionSquareIcon', component: Icons.MentionSquareIcon },
  { group: 'EssentionalUI', name: 'MinusCircleIcon', component: Icons.MinusCircleIcon },
  { group: 'EssentionalUI', name: 'MinusSquareIcon', component: Icons.MinusSquareIcon },
  { group: 'EssentionalUI', name: 'PaperBinIcon', component: Icons.PaperBinIcon },
  { group: 'EssentionalUI', name: 'PinListIcon', component: Icons.PinListIcon },
  { group: 'EssentionalUI', name: 'PlateIcon', component: Icons.PlateIcon },
  { group: 'EssentionalUI', name: 'PostsCarouselHorizontalIcon', component: Icons.PostsCarouselHorizontalIcon },
  { group: 'EssentionalUI', name: 'PostsCarouselVerticalIcon', component: Icons.PostsCarouselVerticalIcon },
  { group: 'EssentionalUI', name: 'PowerIcon', component: Icons.PowerIcon },
  { group: 'EssentionalUI', name: 'ReorderIcon', component: Icons.ReorderIcon },
  { group: 'EssentionalUI', name: 'ShareCircleIcon', component: Icons.ShareCircleIcon },
  { group: 'EssentionalUI', name: 'SliderHorizontalIcon', component: Icons.SliderHorizontalIcon },
  { group: 'EssentionalUI', name: 'SliderMinimalisticHorizontalIcon', component: Icons.SliderMinimalisticHorizontalIcon },
  { group: 'EssentionalUI', name: 'SliderVerticalMinimalisticIcon', component: Icons.SliderVerticalMinimalisticIcon },
  { group: 'EssentionalUI', name: 'SliderVerticalIcon', component: Icons.SliderVerticalIcon },
  { group: 'EssentionalUI', name: 'SortIcon', component: Icons.SortIcon },
  { group: 'EssentionalUI', name: 'SubtitlesIcon', component: Icons.SubtitlesIcon },
  { group: 'EssentionalUI', name: 'TargetIcon', component: Icons.TargetIcon },
  { group: 'EssentionalUI', name: 'TrafficEconomyIcon', component: Icons.TrafficEconomyIcon },
  { group: 'EssentionalUI', name: 'TrafficIcon', component: Icons.TrafficIcon },
  { group: 'EssentionalUI', name: 'TrashBinV2Icon', component: Icons.TrashBinV2Icon },
  { group: 'EssentionalUI', name: 'TrashBinMinimalisticV2Icon', component: Icons.TrashBinMinimalisticV2Icon },
  { group: 'EssentionalUI', name: 'TrashBinMinimalisticIcon', component: Icons.TrashBinMinimalisticIcon },
  { group: 'EssentionalUI', name: 'TrashBinTrashIcon', component: Icons.TrashBinTrashIcon },
  { group: 'EssentionalUI', name: 'DangerTriangleIcon', component: Icons.DangerTriangleIcon },
  { group: 'EssentionalUI', name: 'DangerCircleIcon', component: Icons.DangerCircleIcon },
  { group: 'EssentionalUI', name: 'QuestionCircleIcon', component: Icons.QuestionCircleIcon },
      
//   // List
  { group: 'List', name: 'BillIcon', component: Icons.BillIcon },
  { group: 'List', name: 'ChecklistMinimalisticIcon', component: Icons.ChecklistMinimalisticIcon },
  { group: 'List', name: 'ChecklistIcon', component: Icons.ChecklistIcon },
  { group: 'List', name: 'ListArrowDownMinimalisticIcon', component: Icons.ListArrowDownMinimalisticIcon },
  { group: 'List', name: 'ListArrowDownIcon', component: Icons.ListArrowDownIcon },
  { group: 'List', name: 'ListArrowUpMinimalisticIcon', component: Icons.ListArrowUpMinimalisticIcon },
  { group: 'List', name: 'ListArrowUpIcon', component: Icons.ListArrowUpIcon },
  { group: 'List', name: 'ListCheckMinimalisticIcon', component: Icons.ListCheckMinimalisticIcon },
  { group: 'List', name: 'ListCheckIcon', component: Icons.ListCheckIcon },
  { group: 'List', name: 'ListCrossMinimalisticIcon', component: Icons.ListCrossMinimalisticIcon },
  { group: 'List', name: 'ListCrossIcon', component: Icons.ListCrossIcon },
  { group: 'List', name: 'ListDownMinimalisticIcon', component: Icons.ListDownMinimalisticIcon },
  { group: 'List', name: 'ListDownIcon', component: Icons.ListDownIcon },
  { group: 'List', name: 'ListUpMinimalisticIcon', component: Icons.ListUpMinimalisticIcon },
  { group: 'List', name: 'ListUpIcon', component: Icons.ListUpIcon },
  { group: 'List', name: 'ListV1Icon', component: Icons.ListV1Icon },
  { group: 'List', name: 'ListIcon', component: Icons.ListIcon },
  { group: 'List', name: 'PlaylistMinimalisticIcon', component: Icons.PlaylistMinimalisticIcon },
  { group: 'List', name: 'PlaylistV2Icon', component: Icons.PlaylistV2Icon },
  { group: 'List', name: 'PlaylistMinimalistic3Icon', component: Icons.PlaylistMinimalistic3Icon },
  { group: 'List', name: 'PlaylistIcon', component: Icons.PlaylistIcon },
  { group: 'List', name: 'SortFromBottomToTopIcon', component: Icons.SortFromBottomToTopIcon },
  { group: 'List', name: 'SortFromTopToBottomIcon', component: Icons.SortFromTopToBottomIcon },
  
//   // Messages & Conversation
  { group: 'MessagesConversation', name: 'ForwardIcon', component: Icons.ForwardIcon },
  { group: 'MessagesConversation', name: 'InboxArchiveIcon', component: Icons.InboxArchiveIcon },
  { group: 'MessagesConversation', name: 'InboxInIcon', component: Icons.InboxInIcon },
  { group: 'MessagesConversation', name: 'InboxOutIcon', component: Icons.InboxOutIcon },
  { group: 'MessagesConversation', name: 'InboxIcon', component: Icons.InboxIcon },
  { group: 'MessagesConversation', name: 'LetterOpenedIcon', component: Icons.LetterOpenedIcon },
  { group: 'MessagesConversation', name: 'LetterIcon', component: Icons.LetterIcon },
  { group: 'MessagesConversation', name: 'MultipleForwardLeftIcon', component: Icons.MultipleForwardLeftIcon },
  { group: 'MessagesConversation', name: 'MultipleForwardRightIcon', component: Icons.MultipleForwardRightIcon },
  { group: 'MessagesConversation', name: 'PaperclipV2Icon', component: Icons.PaperclipV2Icon },
  { group: 'MessagesConversation', name: 'PaperclipRoundedV2Icon', component: Icons.PaperclipRoundedV2Icon },
  { group: 'MessagesConversation', name: 'PaperclipRoundedIcon', component: Icons.PaperclipRoundedIcon },
  { group: 'MessagesConversation', name: 'PaperclipIcon', component: Icons.PaperclipIcon },
  { group: 'MessagesConversation', name: 'PenV2Icon', component: Icons.PenV2Icon },
  { group: 'MessagesConversation', name: 'PenNewSquareIcon', component: Icons.PenNewSquareIcon },
  { group: 'MessagesConversation', name: 'PenIcon', component: Icons.PenIcon },
  { group: 'MessagesConversation', name: 'PlainV2Icon', component: Icons.PlainV2Icon },
  { group: 'MessagesConversation', name: 'PlainV3Icon', component: Icons.PlainV3Icon },
  { group: 'MessagesConversation', name: 'SquareForwardIcon', component: Icons.SquareForwardIcon },
  { group: 'MessagesConversation', name: 'SquareShareLineIcon', component: Icons.SquareShareLineIcon },
  { group: 'MessagesConversation', name: 'CheckIcon', component: Icons.CheckIcon },
  { group: 'MessagesConversation', name: 'DoubleCheckIcon', component: Icons.DoubleCheckIcon },
      
//   // Money
  { group: 'Money', name: 'BanknoteV2Icon', component: Icons.BanknoteV2Icon },
  { group: 'Money', name: 'BanknoteIcon', component: Icons.BanknoteIcon },
  { group: 'Money', name: 'BillCrossIcon', component: Icons.BillCrossIcon },
  { group: 'Money', name: 'BillCheckIcon', component: Icons.BillCheckIcon },
  { group: 'Money', name: 'BillListIcon', component: Icons.BillListIcon },
  { group: 'Money', name: 'MoneyBillIcon', component: Icons.MoneyBillIcon },
  { group: 'Money', name: 'CardV2Icon', component: Icons.CardV2Icon },
  { group: 'Money', name: 'CardReciveIcon', component: Icons.CardReciveIcon },
  { group: 'Money', name: 'CardSendIcon', component: Icons.CardSendIcon },
  { group: 'Money', name: 'CardTransferIcon', component: Icons.CardTransferIcon },
  { group: 'Money', name: 'CardIcon', component: Icons.CardIcon },
  { group: 'Money', name: 'CardholderIcon', component: Icons.CardholderIcon },
  { group: 'Money', name: 'DollarMinimalisticIcon', component: Icons.DollarMinimalisticIcon },
  { group: 'Money', name: 'DollarIcon', component: Icons.DollarIcon },
  { group: 'Money', name: 'MoneyBagIcon', component: Icons.MoneyBagIcon },
  { group: 'Money', name: 'SafeCircleIcon', component: Icons.SafeCircleIcon },
  { group: 'Money', name: 'SafeSquareIcon', component: Icons.SafeSquareIcon },
  { group: 'Money', name: 'TagHorizontalIcon', component: Icons.TagHorizontalIcon },
  { group: 'Money', name: 'TagPriceIcon', component: Icons.TagPriceIcon },
  { group: 'Money', name: 'TagIcon', component: Icons.TagIcon },
  { group: 'Money', name: 'TickerStarIcon', component: Icons.TickerStarIcon },
  { group: 'Money', name: 'VerifiedCheckIcon', component: Icons.VerifiedCheckIcon },
  { group: 'Money', name: 'WadOfMoneyIcon', component: Icons.WadOfMoneyIcon },
  { group: 'Money', name: 'WalletV2Icon', component: Icons.WalletV2Icon },
  { group: 'Money', name: 'WalletMoneyIcon', component: Icons.WalletMoneyIcon },
  { group: 'Money', name: 'WalletIcon', component: Icons.WalletIcon },
      
//   // Notes
  { group: 'Notes', name: 'ArchiveCheckIcon', component: Icons.ArchiveCheckIcon },
  { group: 'Notes', name: 'ArchiveDownMinimlisticIcon', component: Icons.ArchiveDownMinimlisticIcon },
  { group: 'Notes', name: 'ArchiveDownIcon', component: Icons.ArchiveDownIcon },
  { group: 'Notes', name: 'ArchiveMinimalisticIcon', component: Icons.ArchiveMinimalisticIcon },
  { group: 'Notes', name: 'ArchiveUpMinimlisticIcon', component: Icons.ArchiveUpMinimlisticIcon },
  { group: 'Notes', name: 'ArchiveUpIcon', component: Icons.ArchiveUpIcon },
  { group: 'Notes', name: 'ArchiveIcon', component: Icons.ArchiveIcon },
  { group: 'Notes', name: 'ClipboardAddIcon', component: Icons.ClipboardAddIcon },
  { group: 'Notes', name: 'ClipboardCheckIcon', component: Icons.ClipboardCheckIcon },
  { group: 'Notes', name: 'ClipboardListIcon', component: Icons.ClipboardListIcon },
  { group: 'Notes', name: 'ClipboardRemoveIcon', component: Icons.ClipboardRemoveIcon },
  { group: 'Notes', name: 'ClipboardTextIcon', component: Icons.ClipboardTextIcon },
  { group: 'Notes', name: 'ClipboardIcon', component: Icons.ClipboardIcon },
  { group: 'Notes', name: 'DocumentMedicineIcon', component: Icons.DocumentMedicineIcon },
  { group: 'Notes', name: 'DocumentTextIcon', component: Icons.DocumentTextIcon },
  { group: 'Notes', name: 'DocumentIcon', component: Icons.DocumentIcon },
  { group: 'Notes', name: 'DocumentsMinimalisticIcon', component: Icons.DocumentsMinimalisticIcon },
  { group: 'Notes', name: 'DocumentsIcon', component: Icons.DocumentsIcon },
  { group: 'Notes', name: 'NotebookIcon', component: Icons.NotebookIcon },
  { group: 'Notes', name: 'NotesMinimalisticIcon', component: Icons.NotesMinimalisticIcon },
  { group: 'Notes', name: 'NotesIcon', component: Icons.NotesIcon },
      
//   // Notifications
  { group: 'Notifications', name: 'BellBingIcon', component: Icons.BellBingIcon },
  { group: 'Notifications', name: 'BellOffIcon', component: Icons.BellOffIcon },
  { group: 'Notifications', name: 'BellIcon', component: Icons.BellIcon },
  { group: 'Notifications', name: 'NotificationLinesRemoveIcon', component: Icons.NotificationLinesRemoveIcon },
  { group: 'Notifications', name: 'NotificationRemoveIcon', component: Icons.NotificationRemoveIcon },
      
//   // Search
  { group: 'Search', name: 'MagniferBugIcon', component: Icons.MagniferBugIcon },
  { group: 'Search', name: 'MagniferZoomInIcon', component: Icons.MagniferZoomInIcon },
  { group: 'Search', name: 'MagniferZoomOutIcon', component: Icons.MagniferZoomOutIcon },
  { group: 'Search', name: 'MagniferIcon', component: Icons.MagniferIcon },
  { group: 'Search', name: 'MinimalisticMagniferBugIcon', component: Icons.MinimalisticMagniferBugIcon },
  { group: 'Search', name: 'MinimalisticMagniferZoomInIcon', component: Icons.MinimalisticMagniferZoomInIcon },
  { group: 'Search', name: 'MinimalisticMagniferZoomOutIcon', component: Icons.MinimalisticMagniferZoomOutIcon },
  { group: 'Search', name: 'MinimalisticMagniferIcon', component: Icons.MinimalisticMagniferIcon },
      
//   // Security
  { group: 'Security', name: 'CodeScanIcon', component: Icons.CodeScanIcon },
  { group: 'Security', name: 'EyeIcon', component: Icons.EyeIcon },
  { group: 'Security', name: 'IncognitoIcon', component: Icons.IncognitoIcon },
  { group: 'Security', name: 'KeyMinimalisticSquareV3Icon', component: Icons.KeyMinimalisticSquareV3Icon },
  { group: 'Security', name: 'KeySquareV2Icon', component: Icons.KeySquareV2Icon },
  { group: 'Security', name: 'KeySquareIcon', component: Icons.KeySquareIcon },
  { group: 'Security', name: 'KeyIcon', component: Icons.KeyIcon },
  { group: 'Security', name: 'LockKeyholeMinimalisticUnlockedIcon', component: Icons.LockKeyholeMinimalisticUnlockedIcon },
  { group: 'Security', name: 'LockKeyholeMinimalisticIcon', component: Icons.LockKeyholeMinimalisticIcon },
  { group: 'Security', name: 'LockUnlockedIcon', component: Icons.LockUnlockedIcon },
  { group: 'Security', name: 'LockIcon', component: Icons.LockIcon },
  { group: 'Security', name: 'PasswordIcon', component: Icons.PasswordIcon },
  { group: 'Security', name: 'ScannerV2Icon', component: Icons.ScannerV2Icon },
  { group: 'Security', name: 'ScannerIcon', component: Icons.ScannerIcon },
  { group: 'Security', name: 'ShieldCheckIcon', component: Icons.ShieldCheckIcon },
  { group: 'Security', name: 'ShieldCrossIcon', component: Icons.ShieldCrossIcon },
  { group: 'Security', name: 'ShieldKeyholeMinimalisticIcon', component: Icons.ShieldKeyholeMinimalisticIcon },
  { group: 'Security', name: 'ShieldKeyholeIcon', component: Icons.ShieldKeyholeIcon },
  { group: 'Security', name: 'ShieldMinimalisticIcon', component: Icons.ShieldMinimalisticIcon },
  { group: 'Security', name: 'ShieldMinusIcon', component: Icons.ShieldMinusIcon },
  { group: 'Security', name: 'ShieldNetworkIcon', component: Icons.ShieldNetworkIcon },
  { group: 'Security', name: 'ShieldPlusIcon', component: Icons.ShieldPlusIcon },
  { group: 'Security', name: 'ShieldStarIcon', component: Icons.ShieldStarIcon },
  { group: 'Security', name: 'ShieldUpIcon', component: Icons.ShieldUpIcon },
  { group: 'Security', name: 'ShieldIcon', component: Icons.ShieldIcon },
  { group: 'Security', name: 'SirenRoundedIcon', component: Icons.SirenRoundedIcon },
  { group: 'Security', name: 'SirenIcon', component: Icons.SirenIcon },
      
//   // Settings Fine Tuning
  { group: 'SettingsFineTuning', name: 'TuningV2Icon', component: Icons.TuningV2Icon },
  { group: 'SettingsFineTuning', name: 'TuningV4Icon', component: Icons.TuningV4Icon },
  { group: 'SettingsFineTuning', name: 'TuningIcon', component: Icons.TuningIcon },
  { group: 'SettingsFineTuning', name: 'WidgetV2Icon', component: Icons.WidgetV2Icon },
  { group: 'SettingsFineTuning', name: 'WidgetV3Icon', component: Icons.WidgetV3Icon },
  { group: 'SettingsFineTuning', name: 'WidgetV4Icon', component: Icons.WidgetV4Icon },
  { group: 'SettingsFineTuning', name: 'WidgetV5Icon', component: Icons.WidgetV5Icon },
  { group: 'SettingsFineTuning', name: 'WidgetV6Icon', component: Icons.WidgetV6Icon },
  { group: 'SettingsFineTuning', name: 'WidgetAddIcon', component: Icons.WidgetAddIcon },
  { group: 'SettingsFineTuning', name: 'WidgetIcon', component: Icons.WidgetIcon },
      
//   // Time
  { group: 'Time', name: 'AlarmAddIcon', component: Icons.AlarmAddIcon },
  { group: 'Time', name: 'AlarmPauseIcon', component: Icons.AlarmPauseIcon },
  { group: 'Time', name: 'AlarmPlayIcon', component: Icons.AlarmPlayIcon },
  { group: 'Time', name: 'AlarmRemoveIcon', component: Icons.AlarmRemoveIcon },
  { group: 'Time', name: 'AlarmSleepIcon', component: Icons.AlarmSleepIcon },
  { group: 'Time', name: 'AlarmTurnOffIcon', component: Icons.AlarmTurnOffIcon },
  { group: 'Time', name: 'AlarmIcon', component: Icons.AlarmIcon },
  { group: 'Time', name: 'CalendarAddIcon', component: Icons.CalendarAddIcon },
  { group: 'Time', name: 'CalendarDateIcon', component: Icons.CalendarDateIcon },
  { group: 'Time', name: 'ClockCircleIcon', component: Icons.ClockCircleIcon },
  { group: 'Time', name: 'ClockSquareIcon', component: Icons.ClockSquareIcon },
  { group: 'Time', name: 'HistoryV2Icon', component: Icons.HistoryV2Icon },
  { group: 'Time', name: 'HistoryV3Icon', component: Icons.HistoryV3Icon },
  { group: 'Time', name: 'HourglassLineIcon', component: Icons.HourglassLineIcon },
  { group: 'Time', name: 'HourglassIcon', component: Icons.HourglassIcon },
  { group: 'Time', name: 'StopwatchPauseIcon', component: Icons.StopwatchPauseIcon },
  { group: 'Time', name: 'StopwatchPlayIcon', component: Icons.StopwatchPlayIcon },
  { group: 'Time', name: 'StopwatchIcon', component: Icons.StopwatchIcon },
  { group: 'Time', name: 'WatchRoundIcon', component: Icons.WatchRoundIcon },
  { group: 'Time', name: 'WatchSquareMinimalisticChargeIcon', component: Icons.WatchSquareMinimalisticChargeIcon },
  { group: 'Time', name: 'WatchSquareMinimalisticIcon', component: Icons.WatchSquareMinimalisticIcon },
  { group: 'Time', name: 'WatchSquareIcon', component: Icons.WatchSquareIcon },
      
//   // VideoAudioSound 
  { group: 'VideoAudioSound', name: 'CameraAddIcon', component: Icons.CameraAddIcon },
  { group: 'VideoAudioSound', name: 'CameraRotateIcon', component: Icons.CameraRotateIcon },
  { group: 'VideoAudioSound', name: 'ClapperboardOpenPlayIcon', component: Icons.ClapperboardOpenPlayIcon },
  { group: 'VideoAudioSound', name: 'ClapperboardOpenIcon', component: Icons.ClapperboardOpenIcon },
  { group: 'VideoAudioSound', name: 'ClapperboardTextIcon', component: Icons.ClapperboardTextIcon },
  { group: 'VideoAudioSound', name: 'ClapperboardIcon', component: Icons.ClapperboardIcon },
  { group: 'VideoAudioSound', name: 'FullScreenCircleIcon', component: Icons.FullScreenCircleIcon },
  { group: 'VideoAudioSound', name: 'FullScreenSquareIcon', component: Icons.FullScreenSquareIcon },
  { group: 'VideoAudioSound', name: 'FullScreenIcon', component: Icons.FullScreenIcon },
  { group: 'VideoAudioSound', name: 'GalleryAddIcon', component: Icons.GalleryAddIcon },
  { group: 'VideoAudioSound', name: 'GalleryCheckIcon', component: Icons.GalleryCheckIcon },
  { group: 'VideoAudioSound', name: 'GalleryDownloadIcon', component: Icons.GalleryDownloadIcon },
  { group: 'VideoAudioSound', name: 'GalleryEditIcon', component: Icons.GalleryEditIcon },
  { group: 'VideoAudioSound', name: 'GalleryRemoveIcon', component: Icons.GalleryRemoveIcon },
  { group: 'VideoAudioSound', name: 'GallerySendIcon', component: Icons.GallerySendIcon },
  { group: 'VideoAudioSound', name: 'LibraryIcon', component: Icons.LibraryIcon },
  { group: 'VideoAudioSound', name: 'MusicNoteSliderV2Icon', component: Icons.MusicNoteSliderV2Icon },
  { group: 'VideoAudioSound', name: 'MutedIcon', component: Icons.MutedIcon },
  { group: 'VideoAudioSound', name: 'PauseIcon', component: Icons.PauseIcon },
  { group: 'VideoAudioSound', name: 'PanoramaIcon', component: Icons.PanoramaIcon },
  { group: 'VideoAudioSound', name: 'PipV2Icon', component: Icons.PipV2Icon },
  { group: 'VideoAudioSound', name: 'PipIcon', component: Icons.PipIcon },
  { group: 'VideoAudioSound', name: 'PlayIcon', component: Icons.PlayIcon },
  { group: 'VideoAudioSound', name: 'PlaybackSpeedIcon', component: Icons.PlaybackSpeedIcon },
  { group: 'VideoAudioSound', name: 'QuitPipIcon', component: Icons.QuitPipIcon },
  { group: 'VideoAudioSound', name: 'RecordIcon', component: Icons.RecordIcon },
  { group: 'VideoAudioSound', name: 'ReelIcon', component: Icons.ReelIcon },
  { group: 'VideoAudioSound', name: 'RewindBackIcon', component: Icons.RewindBackIcon },
  { group: 'VideoAudioSound', name: 'RewindForwardIcon', component: Icons.RewindForwardIcon },
  { group: 'VideoAudioSound', name: 'SkipNextIcon', component: Icons.SkipNextIcon },
  { group: 'VideoAudioSound', name: 'SkipPreviousIcon', component: Icons.SkipPreviousIcon },
  { group: 'VideoAudioSound', name: 'SoundwaveSquareIcon', component: Icons.SoundwaveSquareIcon },
  { group: 'VideoAudioSound', name: 'StopIcon', component: Icons.StopIcon },
  { group: 'VideoAudioSound', name: 'StreamIcon', component: Icons.StreamIcon },
  { group: 'VideoAudioSound', name: 'ToPipIcon', component: Icons.ToPipIcon },
  { group: 'VideoAudioSound', name: 'VideoFramePlayHorizontalIcon', component: Icons.VideoFramePlayHorizontalIcon },
  { group: 'VideoAudioSound', name: 'VideoLibraryIcon', component: Icons.VideoLibraryIcon },
  { group: 'VideoAudioSound', name: 'VideocameraAddIcon', component: Icons.VideocameraAddIcon },
  { group: 'VideoAudioSound', name: 'VideocameraRecordIcon', component: Icons.VideocameraRecordIcon },
  { group: 'VideoAudioSound', name: 'VideocameraIcon', component: Icons.VideocameraIcon },
  { group: 'VideoAudioSound', name: 'VolumeCrossIcon', component: Icons.VolumeCrossIcon },
  { group: 'VideoAudioSound', name: 'VolumeLoudIcon', component: Icons.VolumeLoudIcon },
  { group: 'VideoAudioSound', name: 'VolumeSmallIcon', component: Icons.VolumeSmallIcon },
  { group: 'VideoAudioSound', name: 'VolumeIcon', component: Icons.VolumeIcon },
]);
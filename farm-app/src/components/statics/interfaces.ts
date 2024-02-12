import { ChangeEvent, ReactNode } from "react";
import { FocusEvent } from "react";
export interface FieldData {
  id: string;
  name: string;
  shape: {
    type: "Polygon" | "Multypolygon";
    coordinates: number[][][] | number[][][][];
  };
  fieldArea: number;
  soilId: string;
  farmId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface FarmData {
  id: string;
  name: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
export interface LoginPageProps {}
export interface LandingPageProps {}

export interface FarmFormProps {
  onSubmit: (farmData: FarmFormData) => void;
}

export interface FarmFormData {
  name: string;
  latitude: number;
  longitude: number;
  error: string;
}

export interface CreateFieldCultivationFormData {
  pDate: string;
  machineId: string;
  growingPeriodId: string;
  processTypeId: string;
}

export interface FieldFormProps {
  onSubmit: (fieldData: FieldFormData) => void;
}

export interface FieldFormData {
  name: string;
  shape: {
    type: "Polygon" | "Multypolygon";
    coordinates: number[][][] | number[][][][];
  };
  fieldArea: number;
  soilId: string;
  farmId: string;
  error?: string;
}
export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (loginFormData: LoginFormData) => void;
}

export interface MachineFormData {
  name: string;
  brand: string;
  registerNumber: string;
  farmId: string;
  error: string;
}
export interface MachineFormProps {
  onSubmit: (machineData: MachineFormData) => void;
}

export interface SignUpFormProps {
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  email: string;
  password: string;
  confirmPass: string;
}

export interface FarmCardProps {
  farm: {
    id: string;
    name: string;
    location: {
      type: string;
      coordinates: [number, number];
    };
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}
export interface MachineCardProps {
  machine: {
    id: string;
    name: string;
    brand: string;
    farmId: string;
    registerNumber: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}

export interface FieldCardProps {
  field: {
    id: string;
    name: string;
    shape: {
      type: "Polygon" | "Multypolygon";
      coordinates: number[][][] | number[][][][];
    };
    fieldArea: number;
    soilId: string;
    farmId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}
export interface GrowingPeriodCardProps {
  growingPeriod: {
    id: string;
    cropId: string;
    fieldId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}

export interface EmptyListProps {
  message: string;
}
export interface CropData {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface CreateCropData {
  name: string;
}

export interface SoilData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface MachineData {
  id: string;
  name: string;
  brand: string;
  registerNumber: string;
  farmId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  error?: string;
}
export interface SoilData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ProcessTypeData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
export interface UpdateFieldFormValues {
  name: string;
  fieldArea: number;
  soilId: string;
  farmId: string;
  coordinates: string;
  error: "";
}

export interface GrowingPeriodData {
  id?: string;
  cropId: string;
  fieldId: string;
  processTypeId: string;
  machineId: string;
  pDate?: string;
  error?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}
export interface UpdateMachineFormValues {
  name: string;
  brand: string;
  registerNumber: string;
  farmId: string;
  error: "";
}
export interface UpdateMachineFormProps {
  id: string;
}

export interface UpdateFormValues {
  name: string;
  latitude: string;
  longitude: string;
  error: "";
}

export interface UpdateFarmFormProps {
  id: string;
}

export interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder?: string;
  type?: string;
  name?: string;
}
export interface LoginFormValues {
  email: string;
  password: string;
  error?: "";
}
export interface SignUpFormValues {
  email: string;
  password: string;
  confirmPass: string;
  error?: string;
}

export interface FieldCultivationData {
  id: string;
  pDate: string;
  machineId: string;
  processTypeId: string;
  growingPeriodId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface DecodedToken {
  exp: number;
  role: string;
  email: string;
}
export interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  user: { role: string; email: string } | null;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface BaseLayoutProps {
  children: React.ReactNode;
}

export interface ReportDataItem {
  farmname: string;
  cropname: string;
  fieldcount: number;
}

export interface SoilDataItem {
  farmName: string;
  soilType: string;
  soilTypeCount: number;
}

export interface MachineDataItem {
  farmName: string;
  machineCount: number;
}

export interface LandingPageLogic {
  handleSignUpSubmit: (formData: FormData) => void;
  handleLoginSubmit: (formData: LoginFormData) => void;
}
export interface UpdateFieldFormProps {
  id: string;
}
export interface ErrorResponse {
  message: string;
}
export interface SubmitFormButtonProps {
  label: string;
  color: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface UserRoleHOCProps {
  children: ReactNode;
}
